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

export function ArticleCart(props) {
  const {signout} = useContext(AuthContext)

    return (
     <View>
        <TouchableOpacity onPress={(event)=>props.onPress()}>
            <Image
              style={{margin:8,height:40,width:55}}  
             source = {require("../../../../assets/item.png")}/>
        </TouchableOpacity>
     </View>
    );
  }

export default ArticleCart


