// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-native-learning-23787.firebaseapp.com",
  projectId: "react-native-learning-23787",
  storageBucket: "react-native-learning-23787.appspot.com",
  messagingSenderId: "437544448242",
  appId: "1:437544448242:web:083097ce0ef983ce2f206b",
  measurementId: "G-GEF5W4TEY8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
