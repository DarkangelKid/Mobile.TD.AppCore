/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useCallback, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {StyleSheet, PermissionsAndroid, View, Linking, Platform, ActivityIndicator, Image} from 'react-native';

import {useNavigation, useRoute, StackActions} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';
import {TextInput as TextInputNew} from 'react-native-paper';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

import RNPermissions, {request, check, PERMISSIONS, RESULTS, checkMultiple, openSettings} from 'react-native-permissions';

import axios from 'axios';

import {Colors, Fonts, Images} from '@app/themes';
import * as actions from '@app/redux/global/Actions';

import {Header, TDButtonPrimary, TDButtonSecondary} from '@app/components';

const ListLoaiDichVuScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const [region, setRegion] = useState(null);
  const [location, setLocation] = useState(null);
  const [isMapReady, setIsMapReady] = useState(false);

  useEffect(() => {
    const hasPermissionIOS = async () => {
      const openSetting = () => {
        Linking.openSettings().catch(() => {});
      };
      const status = await Geolocation.requestAuthorization('whenInUse');

      if (status === 'granted') {
        return true;
      }

      if (status === 'denied') {
        //Alert.alert('Location permission denied');
        showMessage({
          message: 'Thất bại',
          description: 'Vui lòng cấp quyền cho ứng dụng được phép phát hiện vị trí của bạn!',
          type: 'danger',
        });
      }

      if (status === 'disabled') {
        /* Alert.alert(`Turn on Location Services to allow "123123" to determine your location.`, '', [
          {text: 'Go to Settings', onPress: openSetting},
          {text: "Don't Use Location", onPress: () => {}},
        ]); */
        showMessage({
          message: 'Thất bại',
          description: 'Vui lòng cấp quyền cho ứng dụng được phép phát hiện vị trí của bạn!',
          type: 'danger',
        });
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
        //ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
        showMessage({
          message: 'Thất bại',
          description: 'Vui lòng cấp quyền cho ứng dụng được phép phát hiện vị trí của bạn!',
          type: 'danger',
        });
      } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        //ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
        showMessage({
          message: 'Thất bại',
          description: 'Vui lòng cấp quyền cho ứng dụng được phép phát hiện vị trí của bạn!',
          type: 'danger',
        });
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
          setRegion({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          });
          console.log('positionpositionposition');
          console.log(position);
        },
        error => {
          setRegion(null);
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
    getLocation();
    return () => {};
  }, []);

  const LuaChonTriTri = async () => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${location.latitude},${location.longitude}&key=AIzaSyDlY4y5xHqMmmMfQiBszGlG9dxyVGKa8Ko`,
      )
      .then(response => {
        try {
          if (response.data.results[0].formatted_address) {
            dispatch(
              actions.saveCurrentPosition({
                address: response.data.results[0].formatted_address,
                latitude: location.latitude,
                longitude: location.longitude,
              }),
            );
            navigation.goBack();
          }
        } catch (errorr) {}
      })
      .catch(error => {});
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <Header title={'Chọn vị trí'} isStack={true} />
      {!region ? (
        <ActivityIndicator size="large" color="#fb8c00" style={{flex: 1, justifyContent: 'center'}} />
      ) : (
        <View style={{flex: 1, backgroundColor: 'red'}}>
          <MapView
            showsUserLocation={true}
            style={{flex: 1}}
            provider={PROVIDER_GOOGLE}
            showsMyLocationButton={true}
            onMapReady={() => {
              setIsMapReady(true);
            }}
            onRegionChangeComplete={e => {
              setLocation(e);
            }}
            region={region}>
            {/*  <Marker
            coordinate={a}
            onSelect={e => console.log('onSelect', e)}
            onDrag={e => console.log('onDrag', e)}
            onDragStart={e => console.log('onDragStart', e)}
            onDragEnd={e => console.log('onDragEnd', e.nativeEvent.coordinate)}
            //onPress={e => console.log('onPress', e)}
            title={'Vị trí của bạn'}
            draggable>
            <View style={{width: 10, height: 10, backgroundColor: 'black'}}></View>
          </Marker> */}
          </MapView>
          <View style={styles.markerFixed}>
            <Image source={Images.icons.pin} style={styles.marker} />
          </View>
          <TDButtonPrimary
            title={'CHỌN VỊ TRÍ NÀY'}
            contentStyle={{position: 'absolute', bottom: 0, marginBottom: 20, alignSelf: 'center'}}
            onPress={() => {
              LuaChonTriTri();
            }}
            titleStyle={{fontWeight: '300'}}
          />
        </View>
      )}
    </View>
  );
};

export default ListLoaiDichVuScreen;

const styles = StyleSheet.create({
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48 - 12,
    position: 'absolute',
    top: '50%',
  },
  marker: {
    height: 48,
    width: 48,
  },
});
