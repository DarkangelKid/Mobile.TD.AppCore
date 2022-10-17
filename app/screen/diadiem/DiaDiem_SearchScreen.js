/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, Alert} from 'react-native';
import {useNavigation, useRoute, StackActions} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import {useFormik} from 'formik';
import {showMessage} from 'react-native-flash-message';
import {TextInput as TextInputNew} from 'react-native-paper';

import {Colors, Fonts, Images} from '@app/themes';
import SQLiteHelper from '@app/utils/SQLiteHelper';
import * as actions from '@app/redux/global/Actions';

import {Header, TDButtonPrimary, TDButtonSecondary} from '@app/components';

const ListLoaiDichVuScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <Header title={'Chọn vị trí'} isStack={true} />
      <ScrollView style={{flex: 1, margin: 16}} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <SafeAreaView>
          <TDButtonPrimary
            title={'CHỌN VỊ TRÍ'}
            contentStyle={{marginTop: 32, paddingVertical: 8}}
            onPress={() => {}}
            titleStyle={{fontWeight: '300'}}
          />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default ListLoaiDichVuScreen;

const styles = StyleSheet.create({});
