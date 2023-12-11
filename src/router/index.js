import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  Home2, Avalanche, Profile2User, ShoppingCart, Category2 } from 'iconsax-react-native';
import React from 'react'
import { Home,Profile,Services,AddItem,Search,DetailItem,EditItem } from '../pages';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MainApp = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => (
            <Home2
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }} />
        <Tab.Screen name="Services" component={Services} options={{
          tabBarLabel: 'Services',
          tabBarIcon: ({focused, color}) => (
            <Category2
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}/>
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color}) => (
            <Profile2User
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}/>
      </Tab.Navigator>
  )
}
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
      <Stack.Screen name="AddItem" component={AddItem} options={{ headerShown: false }} />
      <Stack.Screen name="EditItem" component={EditItem} options={{ headerShown: false }} />
      <Stack.Screen name="DetailItem" component={DetailItem} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
export default Router
const styles = StyleSheet.create({})
