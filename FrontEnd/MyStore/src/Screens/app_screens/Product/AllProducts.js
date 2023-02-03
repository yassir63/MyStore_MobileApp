import React from 'react'
import { TextInput,Text,View,ScrollView ,Button,SafeAreaView,StyleSheet, TouchableNativeFeedback } from 'react-native'
import { useNavigate } from 'react-router-native'
import { useEffect,useState } from 'react';

import { findAll } from '../../../Network/lib/Product';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ProductsBox from './ProductsBox';




function AllProducts() {


    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const get_all_products = ()=>{
      console.log(data)
    }

    useEffect(() => {
      async function fetchData(){
        const datos = await findAll();
        setData(datos)
      }
      fetchData();

    }, [])

    function handle_presse(id_val){
      console.log('Pressed')
      console.log(id_val)
      navigate('/read',{state:{id:id_val}})
      
    }
    function handle_long_presse(id_val){
      console.log('Long Pressed')

      navigate('/edit',{state:{id:id_val}})
    }
    
    return (
    <SafeAreaView style={{flex:1}}>

      <View style={styles.buttons}>
          <View style={styles.input_view}>
            <TextInput
                    style={styles.input}
                    placeholder="Search"
                    />
          </View>     
      </View>
      <View style={styles.box_container}>
        <ProductsBox data={data} styles={box_styles} handle_presse={handle_presse} handle_long_presse={handle_long_presse} />
        <View style={{flex:1,alignItems:'center',justifyContent:'center',}}>
            <TouchableNativeFeedback onPress= {()=>{navigate('/create')}} >
              <View>
              <MaterialIcons name='add-shopping-cart' size={50} style={{color:'dodgerblue'}}/>
              </View>
            </TouchableNativeFeedback>
        </View> 

      </View>
        
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  buttons:{
    height:'15%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',  
    paddingLeft:'5%' ,
    paddingRight:'5%' ,
    
  },
  box_container:{
    flex:1,
    alignItems:'center',
  },
  input: {
    width:"85%",

    color:"#000000",
    fontSize:16,
    fontFamily:'Gugi-Regular',

    },
    input_view:{
      flex:3,
      backgroundColor: "#EBEBEB",
      borderRadius: 20,
      marginRight:5,
      height: 45,
      alignItems:'center',
      justifyContent: 'center',
      shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    }
})

const box_styles = StyleSheet.create({
  box_scroll_view_container:{
      height:'80%',
      width:'90%',
      borderRadius: 20,
      backgroundColor:'#EBEBEB',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
  
      elevation: 4,
    },
    box:{
      width:'100%',
      padding:10,
      borderRadius: 20,
      flexDirection:'row',
      flexWrap:'wrap',    
      backgroundColor:'#EBEBEB',   
    },
    box_item_label:{
      color:'black',
      textAlign:'center',
      marginTop:3
      
    },
})
export default AllProducts