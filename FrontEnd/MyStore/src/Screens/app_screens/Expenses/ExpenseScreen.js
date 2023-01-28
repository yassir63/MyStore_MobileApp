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
import ExpenseItem from '../Expenses/ExpenseItem';

import { useNavigate } from 'react-router-native'

import { findAll } from '../../../Network/lib/Expenses';





export function ExpenseScreen() {
  const navigate = useNavigate();


  const [info, SetInfo] = useState([]);
    const get_all_sales = ()=>{
      console.log(info)
    }




    useEffect(() => {
      async function fetchData(){
        const info = await findAll();
        SetInfo(info)
      }
      fetchData();

    },[info])

    return (
      <SafeAreaView style={styles.page}>

      <View>




      <View style={ styles.header}>
  <TouchableOpacity >
  <Image
              style={{margin:3}}  
             source = {require("../../../../assets/FilterBy.png")}/>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>{navigate('/add')}}>
  <Image
                style={{margin:3}}  
             source = {require("../../../../assets/Add_circle.png")}/>
  </TouchableOpacity>
</View>





<View style={styles.Expense}>
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

            <ExpenseItem props={val}/>
            )
          })
  }




      </ScrollView>
      </View>

    
                
                {/* Total  */}
      
                
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

      <StatusBar style="auto" />

      </SafeAreaView>
    );
  }

export default ExpenseScreen
