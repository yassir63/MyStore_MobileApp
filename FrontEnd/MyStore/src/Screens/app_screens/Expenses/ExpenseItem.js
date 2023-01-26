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

export function ExpenseItem(props) {
  const {signout} = useContext(AuthContext)
  const data=props.props
  console.log(data)
  // console.log(props.props[0]['id_achat'])

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
              Delay  
            </Text>
           <Text style={{fontWeight:'bold',color:'red',fontSize:15}}>
              48 H   
            </Text>
            

            
            
                </View>


                
             
              </View>





              <View style={{flexDirection:'row',alignItems:'center',marginRight:20}}>


                <View style={{alignItems:'center',width:110,padding:3,margin:10,marginRight:30}}>
                <Text style={{fontWeight:'bold',color:'white',fontSize:19}}>
                {/* {data['date_achat'].split('T')[0]}   */}
                Categorie
            </Text>
            <Text style={{fontWeight:'bold',color:'white',fontSize:17}}>
             {/* Bill n#{data['id_achat']}    */}
              {data['categorie']}
                </Text>
                </View>
      
            
                

                <View style={{alignItems:'center',width:100}}>
                {/* <Text style={{fontWeight:'bold',color:'white',fontSize:15}}>
              Status  
            </Text> */}
            {/* {data['paiemenet'] ? <Text style={{fontWeight:'bold',color:'red',fontSize:15}}>
              Credit   
            </Text>:<Text style={{fontWeight:'bold',color:'green',fontSize:15}}>
              Paid   
            </Text>} */}


            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor: 'red',width:132,height:40,borderRadius:10}}>
                <Text style={{fontWeight:'bold',fontSize:16.8,color:'white'}}>Confirm Payment</Text>
            </TouchableOpacity>
            

            
            
                </View>


                
             
              </View>
              
        </View>
    );
  }

export default ExpenseItem


