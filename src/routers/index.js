import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './RootStack';

const index = () => {
  return (
   <NavigationContainer>
    <RootStack />
   </NavigationContainer>
  )
}

export default index

const styles = StyleSheet.create({})