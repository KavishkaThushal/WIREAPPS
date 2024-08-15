
import React from 'react'
import { Tabs } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';

const TabsLayout = () => {
  return (
    <Tabs
    screenOptions={{
      headerShown: false,
    }}>
      <Tabs.Screen name="index" options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
        }} />
      <Tabs.Screen name="cart" options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => <Feather name="shopping-cart" size={24} color={color} />,
        }} />
      <Tabs.Screen name="account" options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} />,
        }} />
    </Tabs>
  )
}
      
     

export default TabsLayout