import React ,{useState, createContext,useEffect} from 'react';

import { axiosClient } from "../Network/axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [isLoading, setIsLoading] =  useState(false)
    const [userToken, setUserToken] =  useState(null)
    const [user_id, setuser_id] =  useState(null)


    function signin(email,password,{navigation}){
      const resp =  axiosClient.post('/auth/signin',{email,password}).then(async res => {
       console.warn(res.data.message)
       console.log(res.data);
       setuser_id(res.data.us_id)
       setIsLoading(true)
       try {
        await AsyncStorage.setItem(
          'userToken',
          ((((res.headers['set-cookie'][0]).split('='))[1]).split(';'))[0]
        );
        
        setUserToken(((((res.headers['set-cookie'][0]).split('='))[1]).split(';'))[0])
        setIsLoading(false)

      } catch (error) {
        // Error saving dat
      }
     
     try {
        const key = await AsyncStorage.getItem(
            'userToken'
          );
  
        } catch (error) {
  console.log(err)      
  }
    
    }).catch(err => console.warn(err.response.data.message)
    // beware error here with data undefined weird !!
     );
    }
  
  async function signup(email,password){
      const resp =  axiosClient.post('/auth/signup',{email,password}).then(res => {
       console.log(res.data.message)
      }).catch(err => console.warn(err.response.data.message)
     );
    }
  
  
  async function signout({ navigation }){
      const resp =  axiosClient.get('/auth/signout').then(async res => {
       console.log(res.data.message)
       setIsLoading(true)
       try {
        const key = await AsyncStorage.removeItem(
            'userToken'
          );

       

        setUserToken(null)
        setIsLoading(false)
  
        } catch (error) {
  console.log(err)      
  }

      }).catch(err => console.warn(err.response.data.message)
     );
     }
  
const isLoggedIn = async () => {

  try{
    let userToken = await AsyncStorage.getItem('userToken');
    setUserToken(userToken);
    // setIsLoading(false);
  }catch(err){
    console.log(`isLoggedIn error ${err}`)
  }
}


useEffect(()=>{
  isLoggedIn();
})


    return (
        <AuthContext.Provider value={{isLoading,userToken,user_id,signin,signout,signup}}>
            {children}
        </AuthContext.Provider>
    )
}