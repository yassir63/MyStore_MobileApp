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
import { create } from '../../../Network/lib/Achats';




export function AddSale() {
  const navigate = useNavigate();

  const {Product_list,setProduct_list} = useContext(Products);
  const {Product_total,setProduct_total} = useContext(Products);

  const {signout} = useContext(AuthContext)

  const [type, setType] = useState("cash");
  const [borrower, setBorrower] = useState("Flan Ben Flan");


  const [produts, setProduts] = useState([]);


  const [reqdata, setReqdata] = useState({});



  const handle_validation = () => {
    console.log('VALIDATED !!!');
  
    let updatedReqdata = {...reqdata};
    
    const currentDate = new Date();
    const day = currentDate.getUTCDate().toString().padStart(2,'0');
    const month = (currentDate.getUTCMonth()+1).toString().padStart(2,'0');
    const year = currentDate.getUTCFullYear();
  
    const currentDateString = year+"-"+month+"-"+day;
    updatedReqdata = {...updatedReqdata, "montant": Product_total.reduce((a, b) => a + b, 0), "date_achat": currentDateString, products: Product_list}

    if(type=='cash'){
      updatedReqdata = {...updatedReqdata, "paiemenet": true}
    }else{
      updatedReqdata = {...updatedReqdata, "paiemenet": false, "crediteur": borrower}
    }
  

  
    console.log("Total is " + Product_total.reduce((a, b) => a + b, 0) + " MAD")
    console.log(updatedReqdata)
  
    setReqdata(updatedReqdata);
    create(updatedReqdata);
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
        <TouchableOpacity onPress={()=>{console.log(reqdata);setReqdata({})}}>
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