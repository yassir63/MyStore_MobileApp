import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailsScreen from '../Screens/App_Screens/DetailsScreen';
import HomeScreen from '../Screens/App_Screens/HomeScreen';
import SettingsScreen from '../Screens/App_Screens/SettingsScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

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
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="details" component={DetailsScreen} options={{
            tabBarStyle: { display: "none" },
          }}/>

      </Tab.Navigator>

  )
}

export default AppBottomStack