/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import React from 'react';

import {Colors, Fonts} from '@app/themes';

const SignInScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.primary}}>
      <View style={{flex: 1 / 3}}>
        <Text>SignInScreen</Text>
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
        <TouchableOpacity
          style={{
            marginTop: 32,
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.primary,
            borderRadius: 100,
            padding: 16,
          }}>
          <Text style={{...Fonts.style.large_bold, color: Colors.white, lineHeight: 24}}>Continue with Email</Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 32,
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <View style={{backgroundColor: '#6C6C6C', height: 1, width: 62}} />
          <Text style={{fontSize: 14, color: '#6C6C6C', marginHorizontal: 12}}>Or continue with</Text>
          <View style={{backgroundColor: '#6C6C6C', height: 1, width: 62}} />
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
