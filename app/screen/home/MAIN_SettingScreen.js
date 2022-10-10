/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import {Header} from 'react-native-elements';

import {Colors, Fonts, Images} from '@app/themes';
import {TDMenuItem} from '@app/components';

const MAIN_HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <Header
        statusBarProps={{barStyle: 'dark-content', backgroundColor: Colors.primary, translucent: true}}
        barStyle="dark-content"
        placement="center"
        centerComponent={{
          text: 'Cài đặt',
          style: {color: Colors.white, ...Fonts.style.extralarge_bold},
        }}
        containerStyle={{
          backgroundColor: Colors.primary,
          borderBottomWidth: 0,
          justifyContent: 'space-around',
        }}
        centerContainerStyle={{justifyContent: 'center'}}
      />
      <ScrollView style={{flex: 1}} >
        <TDMenuItem onPress={() => navigation.navigate('NotificationScreen')} title={'Thông báo, cảnh báo'} iconLeft="bell" />
        <TDMenuItem onPress={() => navigation.navigate('NotificationScreen')} title={'Tài khoản của tôi'} iconLeft="user" />
        <TDMenuItem onPress={() => navigation.navigate('NotificationScreen')} title={'Người dùng'} iconLeft="user-plus" />
        <TDMenuItem onPress={() => navigation.navigate('NotificationScreen')} title={'Phương tiện'} iconLeft="car" />
        <TDMenuItem onPress={() => navigation.navigate('NotificationScreen')} title={'Nhiên liệu'} iconLeft="gas-pump" />
        <TDMenuItem onPress={() => navigation.navigate('NotificationScreen')} title={'Loại hình dịch vụ'} iconLeft="wrench" />
        <TDMenuItem onPress={() => navigation.navigate('NotificationScreen')} title={'Loại chi'} iconLeft="credit-card" />
        <TDMenuItem onPress={() => navigation.navigate('NotificationScreen')} title={'Loại thu nhập'} iconLeft="wallet" />
        <TDMenuItem onPress={() => navigation.navigate('NotificationScreen')} title={'Lý do'} iconLeft="wrench" />
        <TDMenuItem
          onPress={() => navigation.navigate('NotificationScreen')}
          title={'Phương thức thanh toán'}
          iconLeft="usd-circle"
        />
        <TDMenuItem onPress={() => navigation.navigate('NotificationScreen')} title={'Địa điểm'} iconLeft="map-marker" />
        <TDMenuItem onPress={() => navigation.navigate('NotificationScreen')} title={'Liên lạc'} iconLeft="envelope" />
        <TDMenuItem onPress={() => navigation.navigate('NotificationScreen')} title={'Thông tin thêm'} iconLeft="info-circle" />
      </ScrollView>
    </View>
  );
};

export default MAIN_HomeScreen;
