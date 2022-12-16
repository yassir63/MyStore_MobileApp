import React , {useState} from 'react';
import { HomePage } from '../Screens/HomeScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();



export const AppStack = () => {
    return (  
  <Stack.Navigator initialRouteName="HomePage">
    <Stack.Screen name="HomePage" component={HomePage}   options={{ headerShown: false }} />
  </Stack.Navigator>

);
}