import React , {useState} from 'react';
import { styles } from './Styles'

import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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

import { axiosClient } from '../Network/axios';
import { signout } from '../Network/Auth/auth'

export function HomePage({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome To The Home Screen ! </Text>
        <TouchableOpacity style={styles.loginBtn} 
        onPress={() => signout({ navigation })}
        >
              <Text style={styles.loginText}>LOGOUT</Text>
            </TouchableOpacity>
      </View>
    );
  }