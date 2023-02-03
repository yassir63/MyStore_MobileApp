// import React , {useState,useContext} from 'react';
// import { styles } from '../Styles'

// // import type {Node} from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   TextInput,
//   Image,
//   KeyboardAvoidingView,
//   TouchableOpacity,
//   ImageBackground,
//   Button
// } from 'react-native';

// import { axiosClient } from '../Network/axios';
// // import { signout } from '../Network/Auth/auth'
// // import { signin , signup, signout } from '../Network/Auth/Context/AuthContext'

// import { AuthContext } from '../../Context/AuthContext';



// export function Register({ navigation }) {
//   const {signup} = useContext(AuthContext)

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmpassword, setConfirmPassword] = useState("");
  

//   const data = [{"email":email,"password":password}]



//   function CheckPassword(email,password,confirmpassword,{navigation}){


//     if(password === confirmpassword ){
  
//       signup(email,password,{navigation});
      
//     }else{
//       alert("Please Enter the same Password !");
//     }
  
//   }

//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// <Image style={{
//                   resizeMode: "cover",
//                   height: 130,
//                   width: 250,
//                   position: 'relative',
//                   marginBottom:50,
//                   marginTop:-10
                              
//                }} source = {require("../../../assets/logo.png")}/>
// <View style={styles.inputView}>
//            <TextInput
//             style={styles.TextInput}
//             placeholder="Email     "
//             placeholderTextColor="#003f5c"
//             onChangeText={(email) => setEmail(email)}
//           />
//         </View>
       
         
//         <View style={styles.inputView}>
//           <TextInput
//             style={styles.TextInput}
      
//             placeholder="Password"
//             placeholderTextColor="#003f5c"
//             secureTextEntry={true}
//             onChangeText={(password) => setPassword(password)}
//           />
//         </View>

//         <View style={styles.inputView}>
//           <TextInput
//             style={styles.TextInput}
      
//             placeholder="Confirm Password"
//             placeholderTextColor="#003f5c"
//             secureTextEntry={true}
//             onChangeText={(confirmpassword) => setConfirmPassword(confirmpassword)}
//           />
//         </View>
        
//         <TouchableOpacity style={styles.loginBtn} 
//         // onPress={() => signup(email,password,{ navigation })}
//         onPress={() => CheckPassword(email,password,confirmpassword,{ navigation })}

//         // onPress={() => {logout()}}
//         >
//               <Text style={styles.loginText}>SIGN UP</Text>
//             </TouchableOpacity>
//       </View>
//     );
//   }



import React, {useState, useContext} from 'react';
import {styles} from '../Styles';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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

// import { GoogleApis } from 'googleapis';


import {axiosClient} from '../Network/axios';
// import { signout } from '../Network/Auth/auth'
// import { signin , signup, signout } from '../Network/Auth/Context/AuthContext'
import LogIn from '../Auth_Screens/LogIn'
import { AuthContext } from '../../Context/AuthContext';

export function Register({navigation}) {
  const {signup} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const data = [{email: email, password: password}];





  function CheckPassword(email, password, confirmpassword, {navigation}) {
    if (password === confirmpassword) {
      // if (checkEmail()){
      //   console.log("Email Exists !")
      // }else{
      //   console.log("Email doesn't Exist !")
      //   return 0;
      // }
      signup(email, password, {navigation});
      navigation.navigate('LogIn')
      
    } else {
      alert('Please Enter the same Password !');
    }
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{marginBottom: 30, alignItems: 'center'}}>
        <Image
          style={{
            resizeMode: 'cover',
            height: 80,
            width: 93,
            position: 'relative',
            marginBottom: 20,
            marginTop: -10,
          }}
          source={require('../../../assets/LogoW.png')}
        />
        <Text style={styles.Text}>Sign Up</Text>
      </View>
      {/* <View style={styles.Label}>
              <Text style={styles.Text}>
                Name
              </Text>
          </View> */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInputPlaceholder}
          placeholder="exemple@gmail.com"
          placeholderTextColor="#FFFFFF"
          onChangeText={email => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInputPlaceholder}
          placeholder="Password"
          placeholderTextColor="#FFFFFF"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInputPlaceholder}
          placeholder="Confirm Password"
          placeholderTextColor="#FFFFFF"
          secureTextEntry={true}
          onChangeText={confirmpassword => setConfirmPassword(confirmpassword)}
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        // onPress={() => signup(email,password,{ navigation })}
        onPress={() =>
          CheckPassword(email, password, confirmpassword, {navigation})
        }

        // onPress={() => {logout()}}
      >
        <Text
          style={{
            // fontWeight: "bold",
            color: 'white',
            fontSize: 18,          }}>
          SIGN UP
        </Text>
      </TouchableOpacity>
    </View>
  );
}
