import React from 'react'
import { View } from 'react-native'
import { NativeRouter ,Route,Routes} from 'react-router-native'
import SettingsScreen from '../Screens/app_screens/SettingsScreen'
import Profile from './Profile'

function ProfileRouter(props) {
  return (
    <NativeRouter>
        <View style={{flex:1}}>
            
            <Routes>
                <Route exact path='/' element={<props.com/>}/>
                <Route exact path='/profile' element={<Profile/>}/>

            </Routes>

            
        </View>
    </NativeRouter>
  )
}

export default ProfileRouter