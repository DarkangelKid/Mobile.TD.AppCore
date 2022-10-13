import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import AppBottomTab from './AppBottomTab';

import {ListLoaiDichVuScreen, LoaiDichVu_DetailScreen} from '@app/screen/loaidichvu';
import {ListDiaDiemScreen, DiaDiem_DetailScreen, DiaDiem_SearchScreen} from '@app/screen/diadiem';

const AppStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={AppBottomTab} />
      <Stack.Screen name="ListLoaiDichVuScreen" component={ListLoaiDichVuScreen} />
      <Stack.Screen name="LoaiDichVu_DetailScreen" component={LoaiDichVu_DetailScreen} />

      <Stack.Screen name="DiaDiem_DetailScreen" component={DiaDiem_DetailScreen} />
      <Stack.Screen name="ListDiaDiemScreen" component={ListDiaDiemScreen} />
      <Stack.Screen name="DiaDiem_SearchScreen" component={DiaDiem_SearchScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
