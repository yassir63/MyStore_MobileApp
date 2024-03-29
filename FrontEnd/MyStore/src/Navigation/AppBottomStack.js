import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DetailsScreen from '../Screens/app_screens/DetailsScreen';
import Header from '../Screens/app_screens/Header';
import SettingsScreen from '../Screens/app_screens/SettingsScreen';


import Ionicons from 'react-native-vector-icons/Ionicons';
import { View,Text } from 'react-native';

import ProfileRouter from './ProfileRouter';
import Profile from './Profile';

import ProductRoutes from '../Screens/app_screens/Product/ProductRoutes';

import AddSale from '../Screens/app_screens/Sales/AddSale';
import Sales from '../Screens/app_screens/Sales/Sales';

import CreditScreen from '../Screens/app_screens/Credit/CreditScreen';
import ExpenseScreen from '../Screens/app_screens/Expenses/ExpenseScreen';


import SeeCart from '../Screens/app_screens/Sales/SeeCart';
import SalesRoutes from '../Screens/app_screens/Sales/SalesRoutes';
import ExpenseRoutes from '../Screens/app_screens/Expenses/ExpenseRoutes';
import Creditos from '../Screens/app_screens/Credit/Creditos';

//<Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}} />
const Tab = createBottomTabNavigator();

function AppBottomStack() {
  return (

      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'AddSale') {
            iconName = focused
              ? 'lock-closed-outline'
              : 'lock-closed-outline';
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
              <Tab.Screen name="AddSale"  children={()=><ProfileRouter title="Add Sale" com={SalesRoutes}/> }  options={{ headerShown: false }}  />
              <Tab.Screen name="Sales"  children={()=><ProfileRouter title="Sales" com={Sales}/> }  options={{ headerShown: false }}  />
              <Tab.Screen name="Credit"  children={()=><ProfileRouter title="Credit" com={Creditos}/> }  options={{ headerShown: false }}  />
              <Tab.Screen name="Expenses"  children={()=><ProfileRouter title="Expenses" com={ExpenseRoutes}/> }  options={{ headerShown: false }}  />

              {/* <Tab.Screen name="SeeCart" children={()=><ProfileRouter com={SeeCart}/> } options={{
            tabBarStyle: { display: "none" },
            headerShown: false
          }}/> */}
        <Tab.Screen name='Products' children={()=><ProfileRouter title="Products" com={ProductRoutes}/> } options={{headerShown: false}} />
        <Tab.Screen name="details" component={DetailsScreen} options={{
            tabBarStyle: { display: "none" },
            headerShown: false
          }}/>    
      </Tab.Navigator>

  )
}

export default AppBottomStack