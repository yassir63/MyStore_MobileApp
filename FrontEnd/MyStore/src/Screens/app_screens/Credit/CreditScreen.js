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





export function CreditScreen() {
  const navigate = useNavigate();

  let sumCredit=0;

  const [info, SetInfo] = useState([]);


   (info.map((data1)=>{
    
      sumCredit+=data1['achat']['montant']
    
  }))



    useEffect(() => {
      console.log("hna")

      async function fetchData(){
        const infos = await findAll();
        console.log(infos)
        SetInfo(infos)
      }
      fetchData();

    }, [])


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
        {/* <SaleItem/>
        <SaleItem/>
        <SaleItem/>
        <SaleItem/>
        <SaleItem/>
        <SaleItem/> */}


{
          info.map((val)=>{
            return(
            //   <TouchableNativeFeedback key={val["id_produit"]} onPress={()=>handle_presse(val["id_produit"])} onLongPress={()=>handle_long_presse(val["id_produit"])}>
            //     <View  style={{padding:5}}>
            //       <AntDesign name='questioncircleo' size={56} style={{color:'dodgerblue'}}/>
            //       <Text style={styles.box_item_label}>{val["nom"]}</Text>
            //     </View>
            // </TouchableNativeFeedback>

            <CreditItem val={val} SetInfo={SetInfo}/>
            )
          })
  }




      </ScrollView>
      </View>

     <View style={styles.CreditMontant}>
     <View style={{flexDirection:'row',alignItems:'center'}}>
                
                {/* Total  */}
      
                <View style={{height:50,width:120,alignItems:'center',margin:25}}>
                <Text style={{fontWeight:'bold',fontSize:18}}>
              Credit Total   
            </Text>
            <Text style={{fontWeight:'bold',color:'red',fontSize:18}}>
              {sumCredit.toFixed(2)}   
            </Text>
                </View>
      {/* <Image source = {require("../../../../assets/LineSeparatorVertical.png")}/> */}
      {/* Number  */}
      
                {/* <View style={{height:50,width:120,alignItems:'center',margin:25}}>
                <Text style={{fontWeight:'bold',fontSize:18}}>
              Payed Total   
            </Text>
            <Text style={{fontWeight:'bold',color:'green',fontSize:18}}>
              {sumPaid}   
            </Text>
                </View> */}
             
              </View>
     </View>
            
      </View>

      <StatusBar style="auto" />

      </SafeAreaView>
    );
  }

export default CreditScreen
