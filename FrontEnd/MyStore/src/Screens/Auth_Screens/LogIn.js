import React , {useState,useContext} from 'react';
import { styles } from '../Styles'

// import type {Node} from 'react';
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

import { axiosClient } from '../../Network/axios';
// import { signin , signup, signout } from '../Network/Auth/auth'
// import { signin , signup, signout } from '../Network/Auth/Context/AuthContext'

import { AuthContext } from '../../Context/AuthContext';


export function LogIn({ navigation }) {

  const {signin} = useContext(AuthContext)

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
                              
               }} source = {require("../../../assets/logo.png")}/>
      
          <View style={styles.inputView}>
           <TextInput
            style={styles.TextInput}
            placeholder="Email     "
            // placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
       
         
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
      
            placeholder="Password"
            // placeholderTextColor="#003f5c"

            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <TouchableOpacity>
              <Text>Forgot Password?</Text>
            </TouchableOpacity>
            
        <TouchableOpacity style={styles.loginBtn} 
        onPress={async () => await signin(email,password,{ navigation })}
        // onPress={() => {login()}}
        >
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={{marginTop:30}}>New Here?</Text>
            </TouchableOpacity>
        </View>
        
        </KeyboardAvoidingView>
      
              <StatusBar style="auto" />
             
        </SafeAreaView>
    );
  }
  