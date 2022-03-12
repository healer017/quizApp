import React, {useEffect} from 'react'
import {View, Text} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import {SplashScreenStyles} from '../styles/AuthStyles'

const SplashScreen = ({navigation}) => {
  const {container, boldText} = SplashScreenStyles

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Main')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <View style={container}>
      <FontAwesome name="question" size={80} color="#fff" />
      <Text style={boldText}>QUIZ</Text>
    </View>
  )
}

export default SplashScreen
