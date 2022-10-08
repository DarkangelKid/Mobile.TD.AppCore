/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import {Colors, Fonts} from '@app/themes';

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
        <View style={{marginTop: 32}}>
          <TouchableOpacity
            style={{
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Colors.white,
              borderColor: Colors.black,
              borderWidth: 1,
              borderRadius: 100,
              padding: 16,
              flexDirection: 'row',
            }}>
            <Image source={require('@app/assets/images/google.png')} style={{width: 24, height: 24}} />
            <Text style={{...Fonts.style.large_bold, color: Colors.lineblack, lineHeight: 24, marginStart: 10}}>
              Continue with Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 16,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Colors.white,
              borderColor: Colors.black,
              borderWidth: 1,
              borderRadius: 100,
              padding: 16,
              flexDirection: 'row',
            }}>
            <Image source={require('@app/assets/images/apple.png')} style={{width: 24, height: 24}} />
            <Text style={{...Fonts.style.large_bold, color: Colors.lineblack, lineHeight: 24, marginStart: 10}}>
              Continue with Apple
            </Text>
          </TouchableOpacity>
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
