/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useCallback, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {
  StyleSheet,
  PermissionsAndroid,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
  Dimensions,
  Linking,
  Platform,
  ToastAndroid,
} from 'react-native';
import {useNavigation, useRoute, StackActions} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import {useFormik} from 'formik';
import {showMessage} from 'react-native-flash-message';
import {TextInput as TextInputNew} from 'react-native-paper';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';

import RNPermissions, {request, check, PERMISSIONS, RESULTS, checkMultiple, openSettings} from 'react-native-permissions';

import {Colors, Fonts, Images} from '@app/themes';
import SQLiteHelper from '@app/utils/SQLiteHelper';
import * as actions from '@app/redux/global/Actions';

import {Header, TDButtonPrimary, TDButtonSecondary} from '@app/components';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 21.0199694;
const LONGITUDE = 105.84077;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

const ListLoaiDichVuScreen = () => {
  let CurrentPosition = useSelector(state => state.global.CurrentPosition);

  const [region, setRegion] = useState({
    latitude: CurrentPosition?.latitude ?? 0,
    longitude: CurrentPosition?.longitude ?? 0,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  const map = useRef(null);
  const [location, setLocation] = useState(null);
  const [isMapReady, setIsMapReady] = useState(false);

  const [a, setA] = useState({
    latitude: LATITUDE + SPACE,
    longitude: LONGITUDE + SPACE,
  });

  useEffect(() => {
    check(PERMISSIONS.IOS.LOCATION_ALWAYS)
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log('This feature is not available (on this device / in this context)');
            break;
          case RESULTS.DENIED:
            console.log('The permission has not been requested / is denied but requestable');
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch(error => {
        // …
      });
    //openSettings().catch(() => console.warn('cannot open settings'));

    return () => {};
  }, []);

  const hasPermissionIOS = async () => {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('Unable to open settings');
      });
    };
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
      return true;
    }

    if (status === 'denied') {
      Alert.alert('Location permission denied');
    }

    if (status === 'disabled') {
      Alert.alert(`Turn on Location Services to allow "123123" to determine your location.`, '', [
        {text: 'Go to Settings', onPress: openSetting},
        {text: "Don't Use Location", onPress: () => {}},
      ]);
    }

    return false;
  };

  const hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const hasPermission = await hasPermissionIOS();
      return hasPermission;
    }

    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
    }

    return false;
  };

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      position => {
        setLocation(position);
        console.log(position);
      },
      error => {
        Alert.alert(`Code ${error.code}`, error.message);
        setLocation(null);
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: true,
        forceLocationManager: true,
        showLocationDialog: true,
      },
    );
  };

  useEffect(async () => {
    await getLocation();

    return () => {};
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <Header title={'Chọn vị trí'} isStack={true} />
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <MapView
          showsUserLocation={true}
          style={{flex: 1}}
          provider={PROVIDER_GOOGLE}
          showsMyLocationButton={true}
          onMapReady={() => {
            setIsMapReady(true);
          }}
          region={region}>
          <Marker
            coordinate={a}
            /* onSelect={e => console.log('onSelect', e)}
            onDrag={e => console.log('onDrag', e)}
            onDragStart={e => console.log('onDragStart', e)} */
            onDragEnd={e => console.log('onDragEnd', e.nativeEvent.coordinate)}
            //onPress={e => console.log('onPress', e)}
            title={'Vị trí của bạn'}
            draggable>
            <View style={{width: 10, height: 10, backgroundColor: 'black'}}></View>
          </Marker>
        </MapView>
      </View>
    </View>
  );
};

export default ListLoaiDichVuScreen;

const styles = StyleSheet.create({});
