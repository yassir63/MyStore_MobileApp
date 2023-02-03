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
} from 'react-native';
import { Button } from 'react-native-paper'

import { AuthContext } from '../../../Context/AuthContext';
import { styles } from '../../Styles'
import ProductsBox from '../Product/ProductsBox';
import { findAll } from '../../../Network/lib/Product';
import { useNavigate } from 'react-router-native'
import { Products } from './SaleProducts';



export function AddProductToSale() {

  let total;
    const navigate = useNavigate();

    const {Product_list,setProduct_list} = useContext(Products);
    const {Product_total,setProduct_total} = useContext(Products);


    const [data, setData] = useState([]);
    const get_all_products = ()=>{
      console.log(data)
    }

    function handle_presse(id_val,prix){
      console.log("========================================")
      console.log('Added product to sale trigger')
      console.log(id_val)
      console.log(prix)
      
      setProduct_list([...Product_list,id_val]);
      setProduct_total([...Product_total,prix]);


    }

    useEffect(() => {
      async function fetchData(){
        const info = await findAll();
        setData(info)
      }
      fetchData();

    }, [])
    return (
     <View style={styles.page}>
      <ProductsBox data={data} styles={box_styles} handle_presse={handle_presse}/>
      <Button onPress= {()=>{navigate('/')}}>Back</Button>
     </View>
    );
  }

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

export default AddProductToSale


