import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import {MainScreenStyles} from '../styles/AuthStyles'

const MainScreen = ({navigation}) => {
  const {container, blackText, boldText} = MainScreenStyles

  return (
    <View style={container}>
      <FontAwesome name="question" size={70} color="#182635" />
      <Text style={boldText}>Welcome!</Text>
      <Text style={blackText}>Let's start the Quiz.</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Quiz')}
        style={{
          marign: 25,
          justifyContent: 'center',
          alignItems: 'center',
          width: 150,
          height: 50,
          borderRadius: 50,
          backgroundColor: '#182635',
        }}>
        <Text style={{fontWeight: 'bold', color: '#fff'}}>START</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MainScreen
