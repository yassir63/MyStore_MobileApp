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
    buttons:{
      height:'15%',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',  
      paddingLeft:'5%' ,
      paddingRight:'5%' ,
      
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
    },
  //   loginBtn:
  //  {
  //    width:"60%",
  //    borderRadius:25,
  //    height:50,
  //    alignItems:"center",
  //    justifyContent:"center",
  //    marginTop:30,
  //    backgroundColor:"#FF1493",
  //  },
    // inputView: {
    //   backgroundColor: "#0465C9",
    //   borderRadius: 15,
    //   width: "80%",
    //   minWidth:300,
    //   height: 45,
    //   marginBottom: 20,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
    
    // TextInput: {
    //   height: 50,
    //   flex: 1,
    //   padding: 10,
    //   marginLeft: 20,
    //   color:"white",
    //   fontWeight:'bold'
    // },
    
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
    Credit:{
      backgroundColor: '#EBEBEB',
      alignItems: 'center',
      justifyContent: 'center',
      height:367,
      width:326,
      borderRadius:10,
      padding:5,
      marginBottom:20,
    },
    Expense:{
      backgroundColor: '#EBEBEB',
      alignItems: 'center',
      justifyContent: 'center',
      height:505,
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
    CreditMontant:{
      backgroundColor: '#EBEBEB',
      alignItems: 'center',
      justifyContent: 'center',
      height:67,
      width:123,
      borderRadius:10,
      padding:5,
      marginBottom:10,
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

    },
    CreditItem:{
      backgroundColor: '#444746',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      height:126,
      width:306,
      borderRadius:10,
      margin:5,
      padding:10,

    },
    
    loginBtn:
   {
     width:"35%",
     borderRadius:10,
     height:36,
     alignItems:"center",
     justifyContent:"center",
     marginTop:30,
     backgroundColor:"#53CAE3",
   },
    inputView: {
      backgroundColor: "#444746",
      borderRadius: 8,
      width: "50%",
      minWidth:240,
      height: 45,
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    Label:{
      alignSelf:"flex-start",
      alignItems:"flex-start",
      alignContent:'flex-start',
      textAlign:'left',
      backgroundColor:"white",
      minWidth:240,
      Width:"50%",
    },
   
    TextInput: {
      height: 50,
      alignContent:'center',
      textAlign:'center',
      alignItems:'center',
      padding: 10,
      margin: 20,
      color:"#FFFFFF",
      fontWeight:'bold',
    },
    TextInputPlaceholder:{
      height: 50,
      width:"80%",
      textAlign:'center',
      color:"#FFFFFF",
      fontSize:20,
      fontFamily:'Gugi-Regular'

    },
    Text:{
      fontSize:20,
      marginBottom:5,
      color:"black",
      fontFamily:'Gugi-Regular',
    },
    ProfileView:{
      backgroundColor: "#444746",
            borderRadius: 8,
            width: "50%",
            minWidth:220,
            maxWidth:220,
            height: 45,
            marginBottom: 20,
            alignItems:'center',
            justifyContent: 'center',
            alignSelf:'flex-end',
    },
    inlineView:{
      flexDirection:'row',
      flexWrap:'wrap',
    }
  });