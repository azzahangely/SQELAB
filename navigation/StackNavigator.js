import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPassword from '../screens/ForgotPassword';
import ProfileSetup from '../screens/ProfileSetup';
import MainPage from '../screens/MainPage';
import LandingPage from '../screens/LandingPage';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}} />
        <Stack.Screen name="ForgotPass" component={ForgotPassword} options={{headerShown:false}} />
        <Stack.Screen name="ProfileSet" component={ProfileSetup} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={MainPage} options={{headerShown:false}} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})