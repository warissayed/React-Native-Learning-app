import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
import { auth } from "@/Configs/firebaseConfig";
import { signOut } from "firebase/auth";
import { getLocalStorage, removeLocalStorage } from "@/Service/Storage";
import { router } from "expo-router";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const HomeScreen = () => {
  const handleLogout = async () => {
    try {
      await removeLocalStorage("user");
      auth.signOut().then(() => {
        signOut(auth);
        console.log("Sign-out successful");

        router.replace("/auth/signin");
      });
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <View>
      <Text>Home</Text>
      <Text>Welcome</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
