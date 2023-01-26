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




export function AddExpense() {
  const navigate = useNavigate();



  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [delay, setDelay] = useState();


  const handle_validation=()=>{
    

  }

    return (
      <SafeAreaView style={styles.page}>

      <View>

        {/* need to implement this add product in Cart */}
        <View style={styles.Label}>
              <Text style={styles.Text}>
                Category
              </Text>
          </View>
          <View style={styles.inputView}>
           <TextInput
            style={styles.TextInputPlaceholder}
            placeholderTextColor="white"
            
            // placeholderTextColor="#003f5c"
            onChangeText={(category) => setCategory(category)}
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
                Delay
              </Text>
          </View>
          <View style={styles.inputView}>
           <TextInput
            style={styles.TextInputPlaceholder}
            placeholder="In Hours"
            placeholderTextColor="white"
            
            // placeholderTextColor="#003f5c"
            onChangeText={(delay) => setDelay(delay)}
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

