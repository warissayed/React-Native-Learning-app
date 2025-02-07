import React from 'react'
import { Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" 
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
            
            <Entypo name="home" size={size} color={color} />
        )
      }}
      />
      <Tabs.Screen name="AddNew"
      
      options={{
        tabBarLabel: "Add New",
        tabBarIcon: ({ color, size }) => (
            
            <Entypo name="plus" size={size} color={color} />
        )
      }}
      />
      <Tabs.Screen name="Profile"
       options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ color, size }) => (
            
            <Entypo name="user" size={size} color={color} />
        )
      }}
      
      />
    </Tabs>
  )
}
  