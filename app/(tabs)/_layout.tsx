import React, { useEffect, useState } from 'react'
import { Tabs, useRouter, Redirect } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/Configs/firebaseConfig';

export default function TabLayout() {
  const [userAuthenticated, setUserAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  // If auth hasn't been checked yet, don't render anything
  if (userAuthenticated === null) {
    return null;
  }

  // If not authenticated, redirect to auth
  if (!userAuthenticated) {
    return <Redirect href="/auth" />;
  }

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