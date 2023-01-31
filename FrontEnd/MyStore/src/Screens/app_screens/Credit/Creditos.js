import {React,useContext,useState,useEffect} from 'react'
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
import SaleItem from '../Sales/SaleItem';
import CreditItem from '../Credit/CreditItem';

import { useNavigate } from 'react-router-native'

import { findAll } from '../../../Network/lib/Credits';
import { useIsFocused } from "@react-navigation/native";


function Creditos() {

    let sumCredit=0;
  
    const [info, SetInfo] = useState([]);
    const isFocused = useIsFocused();

    (info.map((data1)=>{
    
      sumCredit+=data1['achat']['montant']
    
  }))

      useEffect(() => {
        
        console.log("€€€€€€€€")
  
        async function fetchData(){
          const infos = await findAll();
          console.log(infos)
          SetInfo(infos)
        }
        if(isFocused){
        fetchData();}
  
      }, [isFocused])


        
    

  

  return (
    <SafeAreaView style={styles.page}>

      <View style={styles.page}>



      <View style={styles.buttons}>
          <View style={styles.input_view}>
            <TextInput
                    style={styles.input}
                    placeholder="Search"
                    />
          </View>     
      </View>

  <TouchableOpacity >
  <Image
             
             source = {require("../../../../assets/FilterBy.png")}/>
  </TouchableOpacity>





<View style={styles.Credit}>
      <ScrollView>

{
          info.map((val)=>{
            return(

            <CreditItem val={val} SetInfo={SetInfo}/>
            )
          })
  }

      </ScrollView>
      </View>

     <View style={styles.CreditMontant}>
     <View style={{flexDirection:'row',alignItems:'center'}}>
                
      
                <View style={{height:50,width:120,alignItems:'center',margin:25}}>
                <Text style={{fontWeight:'bold',fontSize:18}}>
              Credit Total   
            </Text>
            <Text style={{fontWeight:'bold',color:'red',fontSize:18}}>
              {sumCredit.toFixed(2)}   
            </Text>
                </View>           
              </View>
     </View>
            
      </View>

      <StatusBar style="auto" />

    </SafeAreaView>
  )
}

export default Creditos