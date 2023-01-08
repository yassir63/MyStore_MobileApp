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
  ImageBackground
} from 'react-native';
import { AuthContext } from '../../../Context/AuthContext';
import { styles } from '../../Styles'
import ArticleCart from './ArticleCart'
import { Button } from 'react-native-paper'
import Header from '../Header'
import { useNavigate } from 'react-router-native'




export function SeeCart() {
  const navigate = useNavigate();


    return (

        <SafeAreaView style={styles.page}>
            <View>
            
        <View style={styles.SeeCart}>
            
        <Text style={{marginBottom:5}}>
          Cart
        </Text>
        <View>
        <View style={{flexDirection:'row'}}>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          </View>
          <View style={{flexDirection:'row'}}>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          </View>
          <View style={{flexDirection:'row'}}>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          </View>
          <View style={{flexDirection:'row'}}>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          </View>
          <View style={{flexDirection:'row'}}>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          </View>
          <View style={{flexDirection:'row'}}>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          </View>
          <View style={{flexDirection:'row'}}>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          </View>
          <View style={{flexDirection:'row'}}>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          </View>
          <View style={{flexDirection:'row'}}>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          <ArticleCart onPress={(value)=>{navigate('/addproduct')}}/>
          </View>
          
          
  
        </View>
        <Button onPress= {()=>{navigate('/')}}>Back</Button>



   
      </View>
      <View style={styles.addSalebuttonsCart}>
        <TouchableOpacity style={{marginRight:20}}>
          <Image

          source = {require("../../../../assets/Checked_Checkbox.png")}/>
          <Text style={{textAlign:'center',fontWeight:'bold'}}>
            Validate
          </Text>
        </TouchableOpacity>
        <TouchableOpacity >
        <Image
        source = {require("../../../../assets/Reset.png")}/>
        <Text
  
  style={{marginTop:10,textAlign:'center',fontWeight:'bold'}}
        >
            Reset
          </Text>
        </TouchableOpacity>
      </View>
      </View>
      </SafeAreaView>
    );
  }

export default SeeCart


