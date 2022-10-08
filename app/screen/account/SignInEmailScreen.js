/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Header} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';

import {Colors, Fonts, Images} from '@app/themes';
import {TDButtonPrimary, TDButtonSecondary, TDDividerWithTitle, TDHeader} from '@app/components';

const SignInEmailScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <TDHeader
        title={'Sign In'}
        leftComponentOnPress={() => {
          navigation.goBack();
        }}
      />

      <ScrollView style={{flex: 1, padding: 16}} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={{marginTop: 16}}>
          <Text style={{color: Colors.gray70, fontSize: Fonts.size.medium}}>Email address</Text>
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
        <View style={{marginTop: 16}}>
          <Text style={{color: Colors.gray70, fontSize: Fonts.size.medium}}>Password</Text>
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
            placeholder={'Enter your password'}
          />
        </View>
        <TDButtonPrimary title={'Sign In'} contentStyle={{marginTop: 32}} />
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
            marginTop: 40,
            alignItems: 'flex-end',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{color: '#6C6C6C', fontSize: 16}}>{'Don’t have an account? '}</Text>
          <TouchableOpacity>
            <Text style={{color: Colors.primary, fontSize: 16, fontWeight: 'bold'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignInEmailScreen;

const styles = StyleSheet.create({});
