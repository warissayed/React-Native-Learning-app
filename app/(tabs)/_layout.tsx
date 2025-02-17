import React, { useEffect, useState } from "react";
import { Tabs, useRouter, Redirect } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/Configs/firebaseConfig";
import { getLocalStorage } from "@/Service/Storage";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default function TabLayout() {
  const router = useRouter();

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = () => {
    const user = getLocalStorage("user");
    if (!user) {
      router.replace("/auth/signin");
    }
    return user;
  };

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="AddNew"
        options={{
          tabBarLabel: "Add New",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="plus" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
