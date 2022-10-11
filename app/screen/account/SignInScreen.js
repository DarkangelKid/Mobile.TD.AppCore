/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';


import {Colors, Fonts, Images} from '@app/themes';
import {TDButtonPrimary, TDButtonSecondary, TDDividerWithTitle, TDTextInputAccount} from '@app/components';

const SignInScreen = () => {
  const navigation = useNavigation();



  return (
    <View style={{flex: 1, backgroundColor: Colors.primary}}>
      <View style={{flex: 1 / 3, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: Colors.white, fontWeight: 'bold', fontSize: 24, lineHeight: 32}}>Hi, Welcome Back!</Text>
        <Text style={{color: Colors.white, fontSize: 14, lineHeight: 22, marginTop: 5}}>Lorem ipsum dolor sit amet</Text>
      </View>

      <ScrollView
        style={{backgroundColor: Colors.white, flex: 2 / 3, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 16}}>
        <TDTextInputAccount title={'Email'} placeholder={'Enter your email address'} showEye={false} />
        <TDButtonPrimary
          title={'Continue with Email'}
          contentStyle={{marginTop: 32}}
          onPress={() => {
            navigation.navigate('SignInEmailScreen');
          }}
        />
        <TDDividerWithTitle title={'Or continue with'} contentStyle={{marginTop: 32, paddingHorizontal: 20}} />

        <View style={{marginTop: 32}}>
          <TDButtonSecondary title={'Continue with Google'} image={Images.icons.google} onPress={() => {}} />
          <TDButtonSecondary
            title={'Continue with Apple'}
            image={Images.icons.apple}
            contentStyle={{marginTop: 16}}
            onPress={() => {}}
          />
        </View>
        <View
          style={{
            paddingTop: 50,
            alignItems: 'flex-end',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{color: '#6C6C6C', fontSize: 16}}>{'Don’t have an account? '}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUpScreen');
            }}>
            <Text style={{color: Colors.primary, fontSize: 16, fontWeight: 'bold'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
