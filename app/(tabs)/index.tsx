import { View, Text, Button } from 'react-native'
import React from 'react'
import { auth } from '@/Configs/firebaseConfig'
import { signOut } from 'firebase/auth'



const HomeScreen = () => {
  
  return (
    <View>
      <Text>Home</Text>
      {/* <Redirect href={"../auth"} /> */}
      <Button title='Logout' onPress={()=>signOut(auth)} />
    </View>
  )
}

export default HomeScreen