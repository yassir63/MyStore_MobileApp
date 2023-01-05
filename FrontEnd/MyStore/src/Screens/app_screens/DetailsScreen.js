import React from 'react'
import { View ,Text} from 'react-native'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';



function DetailsScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details</Text>      
        <Button onPress={()=>navigation.goBack()}>Back</Button>
    </View>
  )
}

export default DetailsScreen