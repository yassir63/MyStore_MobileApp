import { axiosClient } from "../axios";

export function signin(email,password,{navigation}){
    const resp =  axiosClient.post('/auth/signin',{email,password}).then(res => {
     // console.log(res);
    //  console.log(res.data)
     console.warn(res.data.message)
     navigation.navigate('HomePage')
  }).catch(err => console.warn(err.response.data.message)
  // beware error here with data undefined weird !!
   );
  }
  
 export function signup(){
    const resp =  axiosClient.get('/auth/signout').then(res => {
     // console.log(res);
     console.log(res.data.message)
    }).catch(err => console.warn(err.response.data.message)
   );
  }


 export function signout({ navigation }){
    const resp =  axiosClient.get('/auth/signout').then(res => {
     // console.log(res);
     console.log(res.data.message)
     navigation.navigate('LogIn')
    }).catch(err => console.warn(err.response.data.message)
   );
   }
