import {React,useContext,useState,useEffect, useLayoutEffect} from 'react'
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
import { styles } from '../../Styles';

import { deleteOne } from '../../../Network/lib/Expenses';
import { renderMatches, useNavigate } from 'react-router-native'
import {DevSettings} from 'react-native';




export function ExpenseItem(props) {
  const navigate = useNavigate();

  const {signout} = useContext(AuthContext)
  // const data=props.props
  // const [data,setData] = useState({})
  let data = props['props']
  console.log(data)
  // setData(props['props'])
  // console.log()
  // console.log(data)
  // console.log(props.props[0]['id_achat'])


 


  const handle_confirmedpayment=()=>{


    deleteOne(data['id_charge']);
    console.warn("confirmed")
    // setData(props.props)
    // DevSettings.reload()
    // why if naviaget back it gives error !!!

    // navigate('/');

  }

  

    return (
        <View style={styles.CreditItem}>
        <View style={{flexDirection:'row',alignItems:'center'}}>


                <View style={{alignItems:'center',width:110,marginLeft:10}}>
                <Text style={{fontWeight:'bold',color:'white',fontSize:15}}>
                {data['date'].split('T')[0]}  
            </Text>
            <Text style={{fontWeight:'bold',color:'white',fontSize:15}}>
             Bill n#{data['id_charge']}    
            </Text>
                </View>
      
                <View style={{alignItems:'center',width:100}}>
                <Text style={{fontWeight:'bold',color:'white',fontSize:15}}>
              Price   
            </Text>
            <Text style={{fontWeight:'bold',color:'white',fontSize:15}}>
              {data['montant']}   
            </Text>
                </View>


                

                <View style={{alignItems:'center',width:100}}>
                <Text style={{fontWeight:'bold',color:'white',fontSize:15}}>
              Due  
            </Text>
           <Text style={{fontWeight:'bold',color:'yellow',fontSize:14}}>
           {data['date_limite'].split('T')[0]}   
            </Text>
            

            
            
                </View>


                
             
              </View>





              <View style={{flexDirection:'row',alignItems:'center',marginRight:20}}>


                <View style={{alignItems:'center',width:110,padding:3,margin:10,marginRight:30}}>
                <Text style={{fontWeight:'bold',color:'white',fontSize:19}}>
                {/* {data['date_achat'].split('T')[0]}   */}
                Creditor
            </Text>
            <Text style={{fontWeight:'bold',color:'white',fontSize:17}}>
             {/* Bill n#{data['id_achat']}    */}
              {data['creditor']}
                </Text>
                </View>
      
            
                

                <View style={{alignItems:'center',width:100}}>
                {/* <Text style={{fontWeight:'bold',color:'white',fontSize:15}}>
              Status  
            </Text> */}
            {/* {data['paiement'] ? <Text style={{fontWeight:'bold',color:'red',fontSize:15}}>
              Credit   
            </Text>:<Text style={{fontWeight:'bold',color:'green',fontSize:15}}>
              Paid   
            </Text>} */}


            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor: 'red',width:132,height:40,borderRadius:10}} onPress={handle_confirmedpayment}>
                <Text style={{fontWeight:'bold',fontSize:16.8,color:'white'}}>Confirm Payment</Text>
            </TouchableOpacity>
            

            
            
                </View>


                
             
              </View>
              
        </View>
    );
  }

export default ExpenseItem


