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

// import { axiosClient } from '../../Network/axios';
// // import { signin , signup, signout } from '../Network/Auth/auth'
// // import { signin , signup, signout } from '../Network/Auth/Context/AuthContext'

// import { AuthContext } from '../../Context/AuthContext';


// export function LogIn({ navigation }) {

//   const {signin} = useContext(AuthContext)

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
  
//     const data = [{"email":email,"password":password}]
//     console.log(data)
  
//     return (
//       <SafeAreaView style={styles.container}>
        
//       <KeyboardAvoidingView behavior='padding'
//         keyboardVerticalOffset={
//         Platform.select({
//            ios: () => 0,
//            android: () => -300
//         })()
//       }>
//           <View style={styles.container}>
//           <Image style={{
//                   resizeMode: "cover",
//                   height: 130,
//                   width: 250,
//                   position: 'relative',
//                   marginBottom:50,
                              
//                }} source = {require("../../../assets/logo.png")}/>
      
//           <View style={styles.inputView}>
//            <TextInput
//             style={styles.TextInput}
//             placeholder="Email     "
//             // placeholderTextColor="#003f5c"
//             onChangeText={(email) => setEmail(email)}
//           />
//         </View>
       
         
//         <View style={styles.inputView}>
//           <TextInput
//             style={styles.TextInput}
      
//             placeholder="Password"
//             // placeholderTextColor="#003f5c"

//             secureTextEntry={true}
//             onChangeText={(password) => setPassword(password)}
//           />
//         </View>
//         <TouchableOpacity>
//               <Text>Forgot Password?</Text>
//             </TouchableOpacity>
            
//         <TouchableOpacity style={styles.loginBtn} 
//         onPress={async () => await signin(email,password,{ navigation })}
//         // onPress={() => {login()}}
//         >
//               <Text style={styles.loginText}>LOGIN</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => navigation.navigate('Register')}>
//               <Text style={{marginTop:30}}>New Here?</Text>
//             </TouchableOpacity>
//         </View>
        
//         </KeyboardAvoidingView>
      
//               <StatusBar style="auto" />
             
//         </SafeAreaView>
//     );
//   }
  



import React , {useState,useContext,useEffect} from 'react';
import {styles} from '../Styles';
import { GoogleSignin,GoogleSigninButton,statusCodes } from "@react-native-google-signin/google-signin";
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
// import { signin , signup, signout } from '../Network/Auth/auth'
// import { signin , signup, signout } from '../Network/Auth/Context/AuthContext'

import { AuthContext } from '../../Context/AuthContext';

export function LogIn({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const data = [{"email":email,"password":password}]
    console.log(data)
    const {signin} = useContext(AuthContext)
    const [user,setUser] = useState({})
  // added by ahmed
//   useEffect(()=>{
//     GoogleSignin.configure({
//         webClientId:'494290176727-pqvgtp4lmggi88vqen861gt3328u4dlr.apps.googleusercontent.com',
//         offlineAccess:true,
//         forceCodeForRefreshToken:true
//     });
//     isSignedIn()
// },[])
// const signIn = async()=> {
//   try {
//       await GoogleSignin.hasPlayServices();
//       const unserInfo = await GoogleSignin.signIn();
//       console.log('done',unserInfo);
//       setUser(unserInfo)
//   } catch (error) {
//       console.log('Erreur ',error.message);
//       if(error.code===statusCodes.SIGN_IN_CANCELLED){
//           console.log('user concelled the login flow');
//       }else if(error.code===statusCodes.IN_PROGRESS){
//           console.log('Signing in');
//       }else if(error.code===statusCodes.PLAY_SERVICES_NOT_AVAILABLE){
//           console.log('PLAY SERVICES NOT AVAILABLE...');
//       }else{
//           console.log('Something went wrong...');
//       }
//   }
// }

// // added by ahmed
// const isSignedIn = async()=>{
//   const isSignedIn = await GoogleSignin.isSignedIn();
//   if(!!isSignedIn){
//       getCurrentUserInfo();
//   }else{
//       console.log('Please login');
//   }
// };

// added by ahmed
// const getCurrentUserInfo = async ()=>{
//   try {
//       const userInfo = GoogleSignin.signInSilently();
//       console.log('User into edit',user);
//       setUser(userInfo);
//   } catch (error) {
//       if(error.code===statusCodes.SIGN_IN_REQUIRED){
//           alert('user not signed in yet');
//           console.log('user not signed in yet');
//       }else{
//           alert('something went wrong...');
//           console.log('something went wrong...');
//       }
//   }
// }

  // added by ahmed
//   const signOut = async()=>{
//     try {
//         await GoogleSignin.revokeAccess();
//         await GoogleSignin.signOut();
//         setUser({})
//     } catch (error) {
//         console.error(error);
//     }
// };



    
  
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
          <View style={{marginBottom:30,alignItems:"center"}}>
          <Image style={{
                  resizeMode: "cover",
                  height: 80,
                  width: 93,
                  position: 'relative',
                  marginBottom:20,
                              
               }} source = {require("../../../assets/LogoW.png")}/>
               <Text style={styles.Text}>
                Sign In</Text>
          </View>
          <View style={styles.Label}>
              <Text style={styles.Text}>
                Email
              </Text>
          </View>
          <View style={styles.inputView}>
           <TextInput
            style={styles.TextInputPlaceholder}
            placeholder="exemple@gmail.com"
            placeholderTextColor="white"
            
            // placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        
       
        <View style={styles.Label}>
              <Text style={styles.Text}>
                Password
              </Text>
          </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInputPlaceholder}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        {/* <TouchableOpacity>
              <Text>Forgot Password?</Text>
            </TouchableOpacity> */}
            
        <TouchableOpacity style={styles.loginBtn} 
        onPress={async () => await signin(email,password,{ navigation })}
        // onPress={() => {login()}}
        >
              <Text style={{
                // fontWeight: "bold",
                color:"white",
                fontSize:18,
              }}>
                Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={{
                marginTop:30,
                color:'black',
                fontSize:16,
                marginBottom:15,
                }}>
                  New Here?</Text>
            </TouchableOpacity>
            
            {/* <View>
            {!user.idToken? 
                <GoogleSigninButton
                    style = {{width: 192, height:50}}
                    size = {GoogleSigninButton.Size.Wide}
                    color = {GoogleSigninButton.Color.Dark}
                    onPress = {signIn}
                /> :
                <TouchableOpacity onPress={signOut}>
                    <Test>Signout</Test>
                </TouchableOpacity>
                }
            </View> */}
        </View>
        
        </KeyboardAvoidingView>
      
              <StatusBar style="auto" />
             
        </SafeAreaView>
    );
  }
  