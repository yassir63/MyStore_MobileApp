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

export function SaleItem(props) {
  const {signout} = useContext(AuthContext)
  const data=props.props
  console.log(data)
  // console.log(props.props[0]['id_achat'])

    return (
        <View style={styles.SaleItem}>
        <View style={{flexDirection:'row',alignItems:'center'}}>


                <View style={{alignItems:'center',width:110,marginLeft:10}}>
                <Text style={{fontWeight:'bold',color:'white',fontSize:15}}>
                {data['date_achat'].split('T')[0]}  
            </Text>
            <Text style={{fontWeight:'bold',color:'white',fontSize:15}}>
             Bill n#{data['id_achat']}   
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
              Status  
            </Text>
            {data['paiement'] ? <Text style={{fontWeight:'bold',color:'red',fontSize:15}}>
              Credit   
            </Text>:<Text style={{fontWeight:'bold',color:'green',fontSize:15}}>
              Paid   
            </Text>}

            
            
                </View>


                
             
              </View>
              
        </View>
    );
  }

export default SaleItem


