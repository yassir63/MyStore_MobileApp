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
import { signin , signup, signout } from '../Network/Auth/auth'


export function LogIn({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const data = [{"email":email,"password":password}]
    console.log(data)
  
    return (
      <SafeAreaView style={styles.container}>
        
      <KeyboardAvoidingView behavior='padding'
        keyboardVerticalOffset={
        Platform.select({
           ios: () => 0,
           android: () => -300
        })()
      }>
          <View style={styles.container}>
          <Image style={{
                  resizeMode: "cover",
                  height: 130,
                  width: 250,
                  position: 'relative',
                  marginBottom:50,
                              
               }} source = {require("../../assets/logo.png")}/>
      
          <View style={styles.inputView}>
           <TextInput
            style={styles.TextInput}
            placeholder="Email     "
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
       
         
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
      
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <TouchableOpacity>
              <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} 
        onPress={() => signin(email,password,{ navigation })}
        >
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
        
        </KeyboardAvoidingView>
      
              <StatusBar style="auto" />
             
        </SafeAreaView>
    );
  }
  