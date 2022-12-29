import React from 'react'
import AppBottomStack from './AppBottomStack'
import {useState, useContext}from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import  {AuthStack}  from './AuthStack'
import  {AppStack}  from './AppStack'
import { AuthContext } from '../Context/AuthContext';
import { ActivityIndicator } from 'react-native';

function AppNav_dup() {
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
            {userToken !== null ? <AppBottomStack/> : <AppBottomStack/>}
        </NavigationContainer>

    );
}

export default AppNav_dup