import {React,useContext} from 'react'
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
import { AuthContext } from '../../../Context/AuthContext';
import { styles } from '../../Styles'

export function Article() {
  const {signout} = useContext(AuthContext)

    return (
     <View>
        <TouchableOpacity>
            <Image
              style={{margin:3}}  
             source = {require("../../../../assets/item.png")}/>
        </TouchableOpacity>
     </View>
    );
  }

export default Article


