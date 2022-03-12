import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import DATA from '../data/dummy-data'
import '../data/quizScore'
import {MainScreenStyles} from '../styles/AuthStyles'

const ResultScreen = ({navigation, route}) => {
  const {container, blackText, boldText} = MainScreenStyles
  const {quizScore} = route.params

  return (
    <View style={container}>
      <Text style={boldText}>Congrats!</Text>
      <Text style={blackText}>
        Your Score : {quizScore}/{DATA.length}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Main')}
        style={{
          marign: 25,
          justifyContent: 'center',
          alignItems: 'center',
          width: 150,
          height: 50,
          borderRadius: 50,
          backgroundColor: '#182635',
        }}>
        <Text style={{fontWeight: 'bold', color: '#fff'}}>PLAY AGAIN</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ResultScreen
