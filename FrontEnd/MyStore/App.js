import React , {useState} from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
  Button
} from 'react-native';


const Stack = createNativeStackNavigator();

const axiosClient = axios.create({
  baseURL: 'http://20.13.29.135',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

function signin(email,password,{navigation}){
  const resp =  axiosClient.post('/auth/signin',{email,password}).then(res => {
   // console.log(res);
  //  console.log(res.data)
   console.warn(res.data.message)
   navigation.navigate('HomePage')
}).catch(err => console.warn(err.response.data.message)
// beware error here with data undefined weird !!
 );
}

function signup(){
  const resp =  axiosClient.get('/auth/signout').then(res => {
   // console.log(res);
   console.log(res.data.message)
  }).catch(err => console.warn(err.response.data.message)
 );
}

 function signout({ navigation }){
  const resp =  axiosClient.get('/auth/signout').then(res => {
   // console.log(res);
   console.log(res.data.message)
   navigation.navigate('LogIn')
  }).catch(err => console.warn(err.response.data.message)
 );
 }

function LogIn({ navigation }) {

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
                            
             }} source = {require("./assets/logo.png")}/>
    
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


function HomePage({ navigation }) {
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
 
export default function App() {

  

return (
  <NavigationContainer>
  <Stack.Navigator initialRouteName="LogIn">
    <Stack.Screen name="LogIn" component={LogIn}  options={{ headerShown: false }}  />
    <Stack.Screen name="HomePage" component={HomePage}   options={{ headerShown: false }} />
  </Stack.Navigator>
</NavigationContainer>
);
  
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const data = [{"email":email,"password":password}]
//   console.log(data)

//   return (

//     <SafeAreaView style={styles.container}>
      
//       <KeyboardAvoidingView behavior='padding'
//   keyboardVerticalOffset={
//   Platform.select({
//      ios: () => 0,
//      android: () => -300
//   })()
// }>
//     <View style={styles.container}>
//     <Image style={{
//             resizeMode: "cover",
//             height: 130,
//             width: 250,
//             position: 'relative',
//             marginBottom:50,
                        
//           }} source = {require("./assets/logo.png")}/>

//     <View style={styles.inputView}>
//     <TextInput
//       style={styles.TextInput}
//       placeholder="Email     "
//       placeholderTextColor="#003f5c"
//       onChangeText={(email) => setEmail(email)}
//     />
//   </View>
 
   
//   <View style={styles.inputView}>
//     <TextInput
//       style={styles.TextInput}

//       placeholder="Password"
//       placeholderTextColor="#003f5c"
//       secureTextEntry={true}
//       onChangeText={(password) => setPassword(password)}
//     />
//   </View>
//   <TouchableOpacity>
//         <Text style={styles.forgot_button}>Forgot Password?</Text>
//       </TouchableOpacity>
//   <TouchableOpacity style={styles.loginBtn} 
//   onPress={() => signin(email,password)}
//   >
//         <Text style={styles.loginText}>LOGIN</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.loginBtn} 
//   onPress={() => signout()}
//   >
//         <Text style={styles.loginText}>LOGOUT</Text>
//       </TouchableOpacity>
//   </View>
  
//   </KeyboardAvoidingView>

//         <StatusBar style="auto" />
       
//   </SafeAreaView>
  
  // );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtn:
 {
   width:"60%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginTop:40,
   backgroundColor:"#FF1493",
 },
  inputView: {
    backgroundColor: "#0465C9",
    borderRadius: 15,
    width: "80%",
    minWidth:300,
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color:"white",
  },
});


// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
//  * LTI update could not be added via codemod */
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />

//       <Text>Yassir</Text>
//       {/* <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView> */}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;


