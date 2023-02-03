import {React,useContext} from 'react'
import { View ,Text , StyleSheet ,TouchableNativeFeedback} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigate } from 'react-router-native'
import { AuthContext } from '../../../src/Context/AuthContext';


function Header(props) {
  const navigate = useNavigate();
  const {signout} = useContext(AuthContext)

  return (
    <SafeAreaView style={ style.container}>

      <View style={ style.header}>
        <TouchableNativeFeedback onPress={()=>signout({navigate})}>
          <View style={style.cont1}>
            <SimpleLineIcons name='logout' size={30} style={{color:'dodgerblue'}}></SimpleLineIcons>
          </View>
        </TouchableNativeFeedback>
        <View style={style.cont2}><Text style={{color:'black',fontSize:22}}>{props.title}</Text></View>
        <TouchableNativeFeedback onPress={()=>{console.log(props.title);navigate('/profile')}}>
          <View style={style.cont3}>
            <AntDesign name='profile' size={30} style={{color:'dodgerblue'}}/>
          </View>
        </TouchableNativeFeedback>
      </View>

    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  container:{
    height:'10%',
    backgroundColor:'white'
  },
  header:{
    flex:1,
    flexDirection:'row',
  },

  cont1:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    
  },
  cont2:{
    flex:3,
    alignItems:'center',
    justifyContent:'center'
  },
  cont3:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }

})

export default Header