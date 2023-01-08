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


function handle_presse(id_val){
  console.log('Pressed')
  console.log(id_val)
  // navigate('/read',{state:{id:id_val}})
  
}

export function Cart() {
  const navigate = useNavigate();


    return (
        <View style={styles.addSalecart}>
        <Text>
          Cart
        </Text>
        <View>
        <View style={{flexDirection:'row'}}>
          <Article onPress={(value)=>{navigate('/addproduct')}}/>
          <Article onPress={(value)=>{navigate('/addproduct')}}/>
          <Article onPress={(value)=>{navigate('/addproduct')}}/>
          <Article onPress={(value)=>{navigate('/addproduct')}}/>
          <Article onPress={(value)=>{navigate('/addproduct')}}/>
          <Article onPress={(value)=>{navigate('/addproduct')}}/>
          </View>
          <View style={{flexDirection:'row'}}>
          <Article onPress={(value)=>{navigate('/addproduct')}}/>
          <Article onPress={(value)=>{navigate('/addproduct')}}/>
          <Article onPress={(value)=>{navigate('/addproduct')}}/>
          <Article onPress={(value)=>{navigate('/addproduct')}}/>
          <Article onPress={(value)=>{navigate('/addproduct')}}/>
          <Article onPress={(value)=>{navigate('/addproduct')}}/>
          </View>
          <View style={{flexDirection:'row'}}>
          <Article onPress={(value)=>{navigate('/addproduct')}}/>
          <Article onPress={(value)=>{navigate('/addproduct')}}/>
          <Article onPress={(value)=>{navigate('/addproduct')}}/>
          <Article onPress={(value)=>{navigate('/addproduct')}}/>
          <Article onPress={(value)=>{navigate('/addproduct')}}/>
          <Article onPress={(value)=>{navigate('/addproduct')}}/>
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


