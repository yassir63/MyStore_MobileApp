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
import { Products } from './SaleProducts';


export function Cash(props) {
  const {signout} = useContext(AuthContext);
  const {Product_total,setProduct_total} = useContext(Products);



    return (
        <View style={styles.addSalemontant}>

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

        <View >
          <TouchableOpacity style={styles.creditButton}>
        <Text style={{color:'white',fontWeight:'bold'}}>
      Cash
    </Text>
    </TouchableOpacity>
        </View>

{/* Number  */}

<View >
          <TouchableOpacity style={styles.cashButton} onPress={(event)=>props.onPress("credit")}>
        <Text style={{color:'white',fontWeight:'bold'}}>
      Credit
    </Text>
    </TouchableOpacity>
        </View>
     
      </View>
      </View>

    );
  }

export default Cash


