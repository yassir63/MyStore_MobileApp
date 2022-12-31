import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DetailsScreen from '../Screens/app_screens/DetailsScreen';
import Header from '../Screens/app_screens/Header';
import SettingsScreen from '../Screens/app_screens/SettingsScreen';


import Ionicons from 'react-native-vector-icons/Ionicons';
import { View,Text } from 'react-native';

import ProfileRouter from './ProfileRouter';
import Profile from './Profile';

const Home =()=>{
  return (
  <View>
      <Text>
        test
      </Text>
  </View>)
}
//<Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}} />
const Tab = createBottomTabNavigator();

function AppBottomStack() {
  return (

      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'dodgerblue',
        tabBarInactiveTintColor: 'gray',
      })}
      > 
        <Tab.Screen name='Settings' children={()=><ProfileRouter com={SettingsScreen}/> } options={{headerShown: false}} />
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Tab.Screen name="details" component={DetailsScreen} options={{
            tabBarStyle: { display: "none" },
            headerShown: false
          }}/>    
      </Tab.Navigator>

  )
}

export default AppBottomStack