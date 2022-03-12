import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import SplashScreen from '../screens/SplashScreen'
import MainScreen from '../screens/MainScreen'
import QuizScreen from '../screens/QuizScreen'
import ResultScreen from '../screens/ResultScreen'

const Stack = createNativeStackNavigator()

const Navigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
      <Stack.Screen name="Result" component={ResultScreen} />
    </Stack.Navigator>
  )
}

export default Navigator
