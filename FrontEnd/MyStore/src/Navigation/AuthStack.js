import React , {useState} from 'react';
import { LogIn } from '../Screens/Auth_Screens/LogIn'
import { Register } from '../Screens/Auth_Screens/Register'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();



export const AuthStack = () => {
    return (  

  <Stack.Navigator initialRouteName="LogIn">
    <Stack.Screen name="LogIn" component={LogIn}  options={{ headerShown: false }}  />
    <Stack.Screen name="Register" component={Register}   options={{
          title: '',
          headerTransparent: true,
          headerShown: true
        }}  />

  </Stack.Navigator>

);
}