import React , {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { AuthProvider } from "./src/Context/AuthContext"
import AppNav_dup from './src/Navigation/AppNav_dup'

export default function App() {
  useEffect(()=>{
    SplashScreen.hide();
  },[])
return (
//   <NavigationContainer>
//   <Stack.Navigator initialRouteName="LogIn">
//     <Stack.Screen name="LogIn" component={LogIn}  options={{ headerShown: false }}  />
//     <Stack.Screen name="HomePage" component={HomePage}   options={{ headerShown: false }} />
//   </Stack.Navigator>
// </NavigationContainer>

<AuthProvider>
  <AppNav_dup />

</AuthProvider>

//<MyComponent/>


);
}