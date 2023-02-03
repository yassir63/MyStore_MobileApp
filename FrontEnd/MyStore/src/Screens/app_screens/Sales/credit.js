import {React,useContext,useState} from 'react'
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
import { Products } from './SaleProducts';


export function Credit(props) {

  const {signout} = useContext(AuthContext)
  const {Product_total,setProduct_total} = useContext(Products);

// console.log(props)
    return (
      <View style={styles.addSalemontantCredit}>

      {/* Upper View */}
      
              <View style={{flexDirection:'row',alignItems:'center',marginBottom:-15}}>
                
                {/* Total  */}
      
                <View >
                <Text style={{fontWeight:'bold'}}>
              Total   
            </Text>
                </View>
      
      {/* Number  */}
      
                <View style={styles.montantOutput}>
                  
                <Text style={{color:'white',fontWeight:'bold'}}>
               {Product_total.reduce((a, b) => a + b, 0)} MAD
            </Text>
            
                </View>
             
              </View>
      
      
      
              {/* Lower View */}
              <Image source = {require("../../../../assets/LineSeparator.png")}/>
      
      <View style={{margin:-10,marginTop:-20}}>
        <Text style={{fontWeight:'bold'}}>
          Payout Method
        </Text>
      </View>
      
           
            
      
              
              <View style={{flexDirection:'row',alignItems:'center',width:'100%',justifyContent:'space-evenly'}}>
                
              {/* Total  */}
      
              <View>
                <TouchableOpacity style={styles.cashButton} onPress={(event)=>props.onPress("cash")}>
              <Text style={{color:'white',fontWeight:'bold'}}>
            Cash
          </Text>
          </TouchableOpacity>
          
              </View>
      
      {/* Number  */}
      
      <View >
                <TouchableOpacity style={styles.creditButton}>
              <Text style={{color:'white',fontWeight:'bold'}}>
            Credit
          </Text>
          </TouchableOpacity>
              </View>
           
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                
                {/* Total  */}
      
                <View >
                <Text style={{fontWeight:'bold'}}>
              Borrower   
            </Text>
                </View>
      
      {/* Number  */}
      
                <View style={styles.montantOutput}>
                {/* <Text style={{color:'white',fontWeight:'bold'}}>
FLAN BEN FLAN
            </Text> */}
            <TextInput
      style={{ 
color:'white',
alignItems:'center'
    }}
    
	  placeholder="Type here!" onChangeText={(event)=>props.onChangeText(event)}
    />
                </View>
             
              </View>
      
            </View>

    );
  }

export default Credit


