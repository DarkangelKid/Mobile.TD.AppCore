/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import mobileAds, {MaxAdContentRating} from 'react-native-google-mobile-ads';

const Stack = createNativeStackNavigator();

import AppStack from './AppStack';
import {Host} from 'react-native-portalize';

const RootContainerScreen = () => {
  useEffect(() => {
    mobileAds()
      .setRequestConfiguration({
        // Update all future requests suitable for parental guidance
        maxAdContentRating: MaxAdContentRating.PG,

        // Indicates that you want your content treated as child-directed for purposes of COPPA.
        tagForChildDirectedTreatment: true,

        // Indicates that you want the ad request to be handled in a
        // manner suitable for users under the age of consent.
        tagForUnderAgeOfConsent: true,

        // An array of test device IDs to allow.
        testDeviceIdentifiers: ['EMULATOR'],
      })
      .then(() => {
        // Request config successfully set!
      });
    return () => {};
  }, []);

  return (
    <NavigationContainer>
      <Host>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="AppStack"
            component={AppStack}
            options={{
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
      </Host>
    </NavigationContainer>
  );
};

export default RootContainerScreen;

const styles = StyleSheet.create({});
