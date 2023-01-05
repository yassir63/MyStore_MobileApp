import React from 'react'
import { SafeAreaView,StyleSheet,Text, View,Button } from 'react-native'
import { useNavigate,useLocation } from 'react-router-native';
import { findOne } from '../../../Network/lib/Product';
import { useEffect } from 'react';

function ReadProduct() {
  const navigate = useNavigate();
  const location = useLocation();
  //Inputs
  const [inps, setInps] = React.useState({});
  useEffect(()=>{
    async function fetchData(){
      const data = await findOne(location.state.id);
      setInps(data) 
    }  
    fetchData();
  },[])
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.buttons}>
    <View style={{flex:1,paddingLeft:5,paddingRight:5}}><Button  title='Back' onPress={()=>navigate('/')} /></View>
    </View>
      {Object.keys(inps).map((val)=>{ 
          return(
          <View key={val} style={styles.input_container}>
            <View style={styles.label_view} >
              <Text style={styles.input_text}>{val} : </Text>
            </View>
            <View style={styles.input_view}>
              <Text style={styles.input}>{inps[val]}</Text>
            </View>
          </View>
          
      )})}

  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1
  },
  buttons:{
    flex:1,
    flexDirection:'row'
  },
  logo:{
    height:100
  },
  input: {

    width:"80%",
    textAlign:'center',
    color:"#FFFFFF",
    fontSize:16,
    fontFamily:'Gugi-Regular'
    },
    input_view:{
      flex:2,
      backgroundColor: "#444746",
      borderRadius: 8,
      marginRight:5,
      height: 45,
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input_container:{
      flex:1,
      flexDirection:'row'
    },
    label_view:{

      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    input_text:{
      fontSize:16,
      marginBottom:5,
      color:"black",
      fontFamily:'Gugi-Regular',

      
    }

})

export default ReadProduct