import React from 'react'
import { ScrollView,Switch,Text,View,StyleSheet,TextInput, Button,SafeAreaView } from 'react-native';
import { useNavigate,useLocation } from 'react-router-native';
import { useEffect } from 'react';
import { findOne, updateOne } from '../../../Network/lib/Product';

function EditProduct() {
  const Labels = {
    "nom":"Nom",
    "marque":"Marque",
    "categorie":"Categorie",
    "Prix_vente":"Prix vente",
    "Prix_achat":"Prix achat",
    "date_expiration":"Date Expiration",
    "quantite":"Quantite",
    "libelle":"Libelle",
    "description":"Description",
    "id_user":"Id User",
    "id_produit":"Id Produit"
};

  const location = useLocation();

  //Inputs
  const [inps, setInps] = React.useState({});
  const navigate = useNavigate();


useEffect(()=>{
  async function fetchData(){
    const data = await findOne(location.state.id);
    setInps(data) 
  }  
  fetchData();
},[])


  
return (
  <SafeAreaView style={{flex:1}}>
    <ScrollView >
      <View style={styles.buttons}>
      <View style={{flex:1,paddingLeft:5,paddingRight:5}}><Button  title='Back' onPress={()=>navigate('/')} /></View>
        <View style={{flex:1,paddingLeft:5,paddingRight:5}}><Button style={{flex:1}} title='Save' onPress={async()=>{
          const data = await updateOne(location.state.id,inps).then(()=>{
            console.log("updated data -->",data);
            navigate('/');
    
          })

        }}/></View>
      </View>
        {Object.keys(inps).map((val)=>{ 
            return(
            <View key={val} style={styles.input_container}>
              <View style={styles.label_view} >
                <Text style={styles.input_text}>{Labels[val]} : </Text>
              </View>     
                {
                ['id_produit','Prix_vente','Prix_achat','quantite','libelle'].indexOf(val) == -1?
                <View style={styles.input_view}><TextInput
                    style={styles.input}
                    onChangeText={(text)=>{setInps((prev)=>{ return {...prev,[val]:text}})}}
                    value={inps[val]}
                    /></View>: 
                    val=='libelle'?
                    <View style={styles.input_switch_view}><Switch style={{position:'absolute',left:3}}
                      trackColor={{ false: "gray", true: "#81b0ff" }}
                      thumbColor={inps[val] ? "dodgerblue" : "gray"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={(text)=>{console.log(text);setInps((prev)=>{ return {...prev,[val]:text}})}}
                      value={inps[val]}
                    /></View>
                    :<View style={styles.input_view}><TextInput
                    keyboardType="numeric" 
                    style={styles.input}
                    onChangeText={(text)=>{setInps((prev)=>{ return {...prev,[val]:text}})}}
                    value={inps[val].toString()}
                    /></View>
                    }
              
            </View>
            
        )})}
    </ScrollView>
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
    ,marginBottom:10
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
  input_switch_view:{
    flex:2,
    borderRadius: 8,
    marginRight:5,
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input_switch_view:{
    flex:2,
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
    height: 45,
    marginBottom: 20,
    justifyContent: 'center',
    paddingLeft:10
  },
  input_text:{
    fontSize:16,
    marginBottom:5,
    color:"black",
    fontFamily:'Gugi-Regular',

    
  }

})

export default EditProduct