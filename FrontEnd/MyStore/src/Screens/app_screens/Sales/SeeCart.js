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
import { Products } from './SaleProducts';
import { create } from '../../../Network/lib/Achats';


export function SeeCart() {

  const {Product_list,setProduct_list} = useContext(Products);
  const {Product_total,setProduct_total} = useContext(Products);




  const navigate = useNavigate();
  const handle_validation=()=>{
    console.log('validation pressed');

    console.log(Product_list);
    console.log(Product_total);
/*     var date = moment()
      .utcOffset('+05:30')
      .format('YYYY-MM-DD hh:mm:ss a');
    console.log(date); */


    
    console.log("Total is " + Product_total.reduce((a, b) => a + b, 0) + " MAD")
    console.log("========================================")
    create();
  }

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
        <TouchableOpacity onPress={handle_validation} style={{marginRight:20}}>
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


