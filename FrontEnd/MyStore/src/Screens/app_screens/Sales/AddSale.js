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
import { Products } from './SaleProducts';




export function AddSale() {
  const navigate = useNavigate();

  const {Product_list,setProduct_list} = useContext(Products);
  const {Product_total,setProduct_total} = useContext(Products);

  const {signout} = useContext(AuthContext)

  const [type, setType] = useState("cash");
  const [borrower, setBorrower] = useState("Flan Ben Flan");


  const [produts, setProduts] = useState([]);

  const handle_validation=()=>{
    console.log("========================================")
    console.log('VALIDATED !!!');

    // console.log(Product_list);
    // console.log(Product_total.reduce((a, b) => a + b, 0))
    if(type=='cash'){
console.log("floss")
    }else{
      console.log("credit")
      console.log(borrower);
      

    }
    console.log("========================================")

  }

    return (
      <SafeAreaView style={styles.page}>

      <View>

        {/* need to implement this add product in Cart */}

     <Cart add_product_={setProduts} />

     {type == 'credit'? <Credit onChangeText={(value)=>{setBorrower(value)}} onPress={(value)=>{setType(value)}}/>: <Cash onPress={(value)=>{setType(value)}}/> }

     
            <View style={styles.addSalebuttons}>
        <TouchableOpacity onPress={handle_validation}>
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