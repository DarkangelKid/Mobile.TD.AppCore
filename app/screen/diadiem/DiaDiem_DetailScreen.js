/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, Alert} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import {useFormik} from 'formik';
import {showMessage} from 'react-native-flash-message';
import {TextInput as TextInputNew} from 'react-native-paper';

import {Colors, Fonts, Images} from '@app/themes';
import SQLiteHelper from '@app/utils/SQLiteHelper';
import * as actions from '@app/redux/global/Actions';

import {Header, TDButtonPrimary, TDButtonSecondary} from '@app/components';

const sqliteH = new SQLiteHelper({name: 'tdcore.db', createFromLocation: 1});

const ListLoaiDichVuScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const dataParam = route.params?.data ?? null;

  const [initData, setInitData] = useState(
    dataParam || {
      Name: '',
      Address: '',
      Lat: 0,
      Long: 0,
    },
  );

  const {handleChange, handleSubmit, handleBlur, values, errors, touched, setFieldValue} = useFormik({
    enableReinitialize: true,
    initialValues: initData,
    onSubmit: async e => {
      try {
        if (dataParam && dataParam.Id) {
          await sqliteH.updateItem(dataParam?.tableName, {Name: e.Name}, [
            {columnName: 'Id', value: dataParam.Id, operator: '='},
          ]);
        } else {
          await sqliteH.insertItems(dataParam?.tableName, [{Name: e.Name}]);
        }
        showMessage({
          message: 'Thành công',
          description: 'Lưu dữ liệu thành công!',
          type: 'success',
        });
        dispatch(actions.setRandom());
        navigation.goBack();
      } catch (error) {
        console.log(error);
        showMessage({
          message: 'Thất bại',
          description: 'Vui lòng kiểm tra lại!',
          type: 'danger',
        });
      }
    },
  });

  const Delete = async () => {
    try {
      await sqliteH.deleteItem(dataParam?.tableName, [{columnName: 'Id', value: dataParam.Id, operator: '='}]);
      showMessage({
        message: 'Thành công',
        description: 'Xoá dữ liệu thành công!',
        type: 'success',
      });
      dispatch(actions.setRandom());
      navigation.goBack();
    } catch (error) {
      showMessage({
        message: 'Thất bại',
        description: 'Vui lòng kiểm tra lại!',
        type: 'danger',
      });
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <Header title={dataParam?.tableTitle ?? ''} isStack={true} />
      <ScrollView style={{flex: 1, margin: 16}} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <SafeAreaView>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome name={'stream'} style={{marginEnd: 16}} color={Colors.gray70} size={18} />
            <TextInputNew
              style={{backgroundColor: '#FFF', flex: 1}}
              mode="flat"
              label="Tên"
              placeholder=""
              value={values.Name}
              onChangeText={handleChange('Name')}
              underlineColor={Colors.gray60}
              activeUnderlineColor={Colors.primary}
              multiline={false}
              numberOfLines={1}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome name={'map-marker'} style={{marginEnd: 16}} color={Colors.gray70} size={18} solid />
            <TextInputNew
              style={{backgroundColor: '#FFF', flex: 1}}
              mode="flat"
              label={values.Address ? 'Địa chỉ' : 'Hãy chọn khu vực của bạn'}
              placeholder=""
              value={values.Address}
              onChangeText={handleChange('Address')}
              onPressIn={() => {
                navigation.navigate('DiaDiem_SearchScreen');
              }}
              underlineColor={Colors.gray60}
              activeUnderlineColor={Colors.primary}
              multiline={false}
              numberOfLines={1}
            />
          </View>
          <TDButtonPrimary
            title={'ĐĂNG KÝ'}
            contentStyle={{marginTop: 32, paddingVertical: 8}}
            onPress={handleSubmit}
            titleStyle={{fontWeight: '300'}}
          />
          {dataParam && dataParam.Id && (
            <TDButtonSecondary
              title={'XOÁ BỎ'}
              contentStyle={{marginTop: 16, paddingVertical: 8}}
              titleStyle={{fontWeight: '300', color: 'red'}}
              onPress={() => {
                Alert.alert('Xác nhận xoá!', 'Bạn có chắc chắn xoá thông tin này không?', [
                  {
                    text: 'Huỷ',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'Xoá', onPress: () => Delete()},
                ]);
              }}
            />
          )}
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default ListLoaiDichVuScreen;

const styles = StyleSheet.create({});
