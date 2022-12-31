import React from 'react'
import { View,Text, Button } from 'react-native'
import { useNavigate } from 'react-router-native'

function Profile() {
  const navigate = useNavigate();
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'blue'}}>
        <Text>Profile</Text>
        <Button title='Back' onPress={()=>{
          console.log('profile pressed');
          navigate('/');
          
          }}></Button>
    </View>
  )
}

export default Profile