/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/FontAwesome5Pro';
import DeviceInfo from 'react-native-device-info';
let isTablet = DeviceInfo.isTablet();

import {MAIN_HomeScreen} from '../screen/home';

const AppBottomTab = () => {
  return (
    <Tab.Navigator
      headerMode={'none'}
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: '#FFF',
        tabBarInactiveBackgroundColor: '#FFF',
        tabBarActiveTintColor: '#D6002C',
        tabBarInactiveTintColor: '#757E83',
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '400',
        },
        tabBarStyle: {paddingHorizontal: isTablet ? 100 : 0, backgroundColor: '#FFFFFF'},
      }}
      backBehavior={'initialRoute'}>
      <Tab.Screen
        headerMode={'none'}
        name="HomeScreen"
        component={MAIN_HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({focused, tintColor, size}) => (
            <View>
              <Icon
                name="home"
                size={isTablet ? 24 : 22}
                color={focused ? '#D6002C' : '#757E83'}
                solid={focused ? true : false}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="TDTM_MainScreen"
        component={MAIN_HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Tổng đài nhanh',
          tabBarBadge: null,
          tabBarIcon: ({focused, tintColor, size}) => (
            <View>
              <Icon
                name="phone-volume"
                size={isTablet ? 24 : 22}
                color={focused ? '#D6002C' : '#757E83'}
                solid={focused ? true : false}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={MAIN_HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Cá nhân',
          tabBarIcon: ({focused, tintColor, size}) => (
            <Icon name="user" size={isTablet ? 24 : 22} color={focused ? '#D6002C' : '#757E83'} solid={focused ? true : false} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppBottomTab;
