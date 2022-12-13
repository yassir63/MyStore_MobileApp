import React , {useState} from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  ImageBackground,
  Button
} from 'react-native';

import { LogIn } from './src/Screens/LogIn'
import { HomePage } from './src/Screens/HomeScreen'

const Stack = createNativeStackNavigator();
 
export default function App() {
return (
  <NavigationContainer>
  <Stack.Navigator initialRouteName="LogIn">
    <Stack.Screen name="LogIn" component={LogIn}  options={{ headerShown: false }}  />
    <Stack.Screen name="HomePage" component={HomePage}   options={{ headerShown: false }} />
  </Stack.Navigator>
</NavigationContainer>
);
}