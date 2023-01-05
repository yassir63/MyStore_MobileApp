import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({

  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:10,
    marginTop:-20,
  },

  cont1:{
    alignItems:'center',
    justifyContent:'center'
    
  },
  cont2:{
    alignItems:'center',
    justifyContent:'center'
  },
  cont3:{
    alignItems:'center',
    justifyContent:'center'
  },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginBtn:
   {
     width:"60%",
     borderRadius:25,
     height:50,
     alignItems:"center",
     justifyContent:"center",
     marginTop:30,
     backgroundColor:"#FF1493",
   },
    inputView: {
      backgroundColor: "#0465C9",
      borderRadius: 15,
      width: "80%",
      minWidth:300,
      height: 45,
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      color:"white",
      fontWeight:'bold'
    },
    
    TopBar:{
      
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    addSalecart:{
      // flex: 1,
      backgroundColor: '#EBEBEB',
      alignItems: 'center',
      justifyContent: 'space-between',
      height:202,
      width:326,
      marginTop:10,
      marginBottom:54,
      borderRadius:10,
      padding:5,
    },

    addSalemontant:{
      backgroundColor: '#EBEBEB',
      alignItems: 'center',
      justifyContent: 'space-around',
      height:202,
      width:326,
      
      borderRadius:10
    },

    addSalebuttons:{
      
      alignItems: 'center',
      justifyContent: 'space-evenly',
      flexDirection:'row',
      height:60,
      marginTop:30,
      marginBottom:10,

      borderRadius:10
    },
    addSalebuttonsCart:{
      
      alignItems: 'center',
      justifyContent: 'space-evenly',
      flexDirection:'row',
      height:60,
      marginTop:10,
      marginBottom:35,

      borderRadius:10
    },

    page:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor:'white',

    },
    montantOutput:{
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'space-around',
      height:40,
      width:164,
      marginLeft:40,

      
      borderRadius:10
    },
    cashButton:{
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'space-around',
      height:40,
      width:104,
   

      
      borderRadius:10
    },
    creditButton:{
      backgroundColor: '#53CAE3',
      alignItems: 'center',
      justifyContent: 'space-around',
      height:40,
      width:104,


      
      borderRadius:10
    },
    addSalemontantCredit:{
      backgroundColor: '#EBEBEB',
      alignItems: 'center',
      justifyContent: 'space-around',
      height:267,
      width:326,
      
      borderRadius:10
    },
    SeeCart:{
      backgroundColor: '#EBEBEB',
      alignItems: 'center',
      justifyContent: 'space-between',
      height:568,
      width:326,
      borderRadius:10,
      padding:5,
      marginTop:20,
    },
    Sales:{
      backgroundColor: '#EBEBEB',
      alignItems: 'center',
      justifyContent: 'space-between',
      height:411,
      width:326,
      borderRadius:10,
      padding:5,
      marginBottom:20,
    },
    SalesMontant:{
      backgroundColor: '#EBEBEB',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      height:67,
      width:326,
      borderRadius:10,
      padding:5,
      marginTop:20,
    },
    SaleItem:{
      backgroundColor: '#444746',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      height:66,
      width:306,
      borderRadius:10,
      margin:5,
      padding:10,

    }
  });