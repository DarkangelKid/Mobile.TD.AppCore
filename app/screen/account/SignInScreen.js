/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import {Colors, Fonts, Images} from '@app/themes';
import {TDButtonPrimary, TDButtonSecondary, TDDividerWithTitle} from '@app/components';

const SignInScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.primary}}>
      <View style={{flex: 1 / 3, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: Colors.white, fontWeight: 'bold', fontSize: 24, lineHeight: 32}}>Hi, Welcome Back!</Text>
        <Text style={{color: Colors.white, fontSize: 14, lineHeight: 22, marginTop: 5}}>Lorem ipsum dolor sit amet</Text>
      </View>

      <View style={{backgroundColor: Colors.white, flex: 2 / 3, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 16}}>
        <View style={{marginTop: 10}}>
          <Text style={{color: Colors.gray70, fontSize: Fonts.size.medium}}>Email</Text>
          <TextInput
            style={{
              ...Fonts.style.large_regular,
              borderRadius: 24,
              height: 52,
              backgroundColor: Colors.secondary,
              paddingHorizontal: 10,
              marginTop: 10,
            }}
            placeholderTextColor={Colors.gray60}
            placeholder={'Enter your email address'}
          />
        </View>
        <TDButtonPrimary title={'Continue with Email'} contentStyle={{marginTop: 32}} />
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
            paddingBottom: 10,
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{color: '#6C6C6C', fontSize: 16}}>{'Don’t have an account? '}</Text>
          <TouchableOpacity>
            <Text style={{color: Colors.primary, fontSize: 16, fontWeight: 'bold'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
