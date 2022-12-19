import React ,{useState, useContext}from 'react';
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
import { NavigationContainer } from '@react-navigation/native';
import  {AuthStack}  from './AuthStack'
import  {AppStack}  from './AppStack'
import { AuthContext } from '../Context/AuthContext';
import { ActivityIndicator } from 'react-native';

export default function AppNav() {

    const {isLoading,userToken} = useContext(AuthContext)

    if(isLoading){
      return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size={'large'} />
    </View>
      )
     
    }

    return(
        <NavigationContainer>
        {userToken !== null ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    );
}