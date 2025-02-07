import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'


const HomeScreen = () => {
  return (
    <View>
      <Text>Home</Text>
      <Redirect href={"../auth"} />
    </View>
  )
}

export default HomeScreen