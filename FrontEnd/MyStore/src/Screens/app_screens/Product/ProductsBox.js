import React from 'react'
import { Text,View,ScrollView ,StyleSheet, TouchableNativeFeedback } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

function ProductsBox(props) {
  return (
    <View style={props.styles.box_scroll_view_container}>
        <ScrollView  contentContainerStyle={props.styles.box}>

          {
          (props.data).map((val)=>{
            return(
              <TouchableNativeFeedback key={val["id_produit"]} onPress={()=>props.handle_presse(val["id_produit"])} onLongPress={()=>props.handle_long_presse(val["id_produit"])}>
                <View  style={{padding:5}}>
                  <AntDesign name='questioncircleo' size={56} style={{color:'dodgerblue'}}/>
                  <Text style={props.styles.box_item_label}>{val["nom"]}</Text>
                </View>
            </TouchableNativeFeedback>
            )
          })}
        </ScrollView >
        </View>
  )
}



export default ProductsBox