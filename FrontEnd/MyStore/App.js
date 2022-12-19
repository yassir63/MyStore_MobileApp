import React , {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import type {Node} from 'react';

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
  Button,
} from 'react-native';

import { AuthProvider } from "./src/Context/AuthContext"
import AppNav from './src/Navigation/AppNav'
 
export default function App() {
  useEffect(()=>{
    SplashScreen.hide();
  },[])
return (
//   <NavigationContainer>
//   <Stack.Navigator initialRouteName="LogIn">
//     <Stack.Screen name="LogIn" component={LogIn}  options={{ headerShown: false }}  />
//     <Stack.Screen name="HomePage" component={HomePage}   options={{ headerShown: false }} />
//   </Stack.Navigator>
// </NavigationContainer>

<AuthProvider>
  <AppNav />

</AuthProvider>

);
}