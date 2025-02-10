import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from "../../constant/Colors"
import { router } from 'expo-router'

const loginScreen = () => {
  return (
    <View>
     <View style={styles?.container}>
     <Image  source={require("../../assets/images/login.png")} style={styles?.image} />
     </View>
     <View style={styles?.textContainer}>
      <Text style={styles?.title}>Stay on Track,Stay Healthy , Start Today.</Text>
      <Text style={styles?.summary}>Track your Habit with us </Text>
      <TouchableOpacity style={styles?.buttonContainer} onPress={()=>router.push("/auth/login")} ><Text style={styles?.button}>Login</Text></TouchableOpacity>
      <TouchableOpacity style={styles?.buttonContainer} onPress={()=>router.push("/auth/signup")} ><Text style={styles?.button}>Sign Up</Text></TouchableOpacity>
     </View>
    </View>
  )
}

export default loginScreen

const styles = StyleSheet.create({
  image:{
    width:210,
    height:450,
    borderRadius:20,
    },
  container:{
    display:'flex',
    alignItems:"center",
    marginTop:40,
   },
  textContainer:{
    height:"100%",
    display:'flex',
    alignItems:"center",
    borderRadius:20,
    padding:25,
    backgroundColor:Color?.PRIMARY,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
   
  },
  title:{  
    fontSize:30,
    fontWeight:"bold",
    textAlign:"center",
    color:"white",
    
  },
  summary:{  
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center",
    color:"white",
    marginTop:20
  },
  buttonContainer:{
    width:"100%",
    display:"flex",
    alignItems:"center",
   
   
  },
  button:{
    fontSize:16,
    backgroundColor:"white",
    marginTop:20,
    padding:10,
    borderRadius:90,
    width:"100%",
    textAlign:"center",
    color:Color?.PRIMARY
  }
  

})