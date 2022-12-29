import {React,useContext} from 'react'
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
import { AuthContext } from '../../Context/AuthContext';
import { styles } from '../Styles'

export function HomeScreen({ navigation }) {
  const {signout} = useContext(AuthContext)

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome To The Home Screen ! </Text>
        <TouchableOpacity style={styles.loginBtn} 
        onPress={() => signout({ navigation })}
        // onPress={() => {logout()}}

        >
              <Text style={styles.loginText}>LOGOUT</Text>
            </TouchableOpacity>
      </View>
    );
  }

export default HomeScreen