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
import { create } from '../../../Network/lib/Expenses';




export function AddExpense() {
  const navigate = useNavigate();


  const [data, setData] = useState({});

  const [creditor, setCreditor] = useState();
  const [price, setPrice] = useState();
  const [duedate, setDueDate] = useState();


  const handle_validation=()=>{


    const currentDate = new Date();
    const day = currentDate.getUTCDate().toString().padStart(2,'0');
    const month = (currentDate.getUTCMonth()+1).toString().padStart(2,'0');
    const year = currentDate.getUTCFullYear();
  
    const currentDateString = year+"-"+month+"-"+day;
    setData({"montant" : parseFloat(price),"creditor" : creditor,"date":new Date(), "date_limite" : new Date(duedate)});
    console.log(data)  
   
    create(data);
    console.warn("saved")

    // why if naviaget back it gives error !!!!
    
    // navigate('/');

  }

    return (
      <SafeAreaView style={styles.page}>

      <View>

        {/* need to implement this add product in Cart */}
        <View style={styles.Label}>
              <Text style={styles.Text}>
                Creditor
              </Text>
          </View>
          <View style={styles.inputView}>
           <TextInput
            style={styles.TextInputPlaceholder}
            placeholderTextColor="white"
            
            // placeholderTextColor="#003f5c"
            onChangeText={(creditor) => setCreditor(creditor)}
          />
        </View>
        <View style={styles.Label}>
              <Text style={styles.Text}>
                Price
              </Text>
          </View>
          <View style={styles.inputView}>
           <TextInput
            style={styles.TextInputPlaceholder}
            placeholderTextColor="white"
            
            // placeholderTextColor="#003f5c"
            onChangeText={(price) => setPrice(price)}
          />
        </View>
        <View style={styles.Label}>
              <Text style={styles.Text}>
                Due Date
              </Text>
          </View>
          <View style={styles.inputView}>
           <TextInput
            style={styles.TextInputPlaceholder}
            placeholder="YY-MM-DD"
            placeholderTextColor="white"
            
            // placeholderTextColor="#003f5c"
            onChangeText={(duedate) => setDueDate(duedate)}
          />
        </View>
        
        
        
     
            <View style={styles.addSalebuttons}>
        <TouchableOpacity onPress={handle_validation}>
          <Image

          source = {require("../../../../assets/Checked_Checkbox.png")}/>
          <Text style={{textAlign:'center',fontWeight:'bold'}}>
            Validate
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigate('/')}}>
        <Image
        source = {require("../../../../assets/return.png")}/>
        <Text
  
  style={{marginTop:10,textAlign:'center',fontWeight:'bold'}}
        >
            Return
          </Text>
        </TouchableOpacity>
      </View>
      </View>

      <StatusBar style="auto" />

      </SafeAreaView>
    );
  }

export default AddExpense

