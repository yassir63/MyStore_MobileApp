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
import Article from '../Sales/article'
import Credit from '../Sales/credit'
import Cash from '../Sales/cash'
import Cart from '../Sales/Cart'
import Header from '../Header'
import { useNavigate } from 'react-router-native'





export function AddSale() {
  const navigate = useNavigate();

  const {signout} = useContext(AuthContext)

  const [type, setType] = useState("cash");

    return (
      <SafeAreaView style={styles.page}>

      <View>

     <Cart/>

     {type == 'credit'? <Credit onPress={(value)=>{setType(value)}}/>: <Cash onPress={(value)=>{setType(value)}}/> }

     
            <View style={styles.addSalebuttons}>
        <TouchableOpacity>
          <Image

          source = {require("../../../../assets/Checked_Checkbox.png")}/>
          <Text style={{textAlign:'center',fontWeight:'bold'}}>
            Validate
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
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

      <StatusBar style="auto" />

      </SafeAreaView>
    );
  }

export default AddSale




// <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Welcome To The Home Screen ! </Text>
//         <TouchableOpacity style={styles.loginBtn} 
//         onPress={() => signout({ navigation })}
//         // onPress={() => {logout()}}

//         >
//               <Text style={styles.loginText}>LOGOUT</Text>
//             </TouchableOpacity>
//       </View>