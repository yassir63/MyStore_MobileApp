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
import Article from '../Sales/article'
import { useNavigate } from 'react-router-native'


export function Cart() {
  const navigate = useNavigate();


    return (
        <View style={styles.addSalecart}>
        <Text>
          Cart
        </Text>
        <View>
        <View style={{flexDirection:'row'}}>
          <Article/>
          <Article/>
          <Article />
          <Article/>
          <Article/>
          <Article/>
          </View>
          <View style={{flexDirection:'row'}}>
          <Article/>
          <Article/>
          <Article/>
          <Article/>
          <Article/>
          <Article/>
          </View>
          <View style={{flexDirection:'row'}}>
          <Article/>
          <Article/>
          <Article/>
          <Article/>
          <Article/>
          <Article/>
          </View>
          
  
        </View>
        <TouchableOpacity onPress= {()=>{navigate('/more')}}>
        <Text>
          More
        </Text>
        </TouchableOpacity>
        </View>
    );
  }

export default Cart


