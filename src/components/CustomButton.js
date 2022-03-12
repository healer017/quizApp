import React from 'react'
import {TouchableOpacity, Text} from 'react-native'

const CustomButton = props => {
  const {onPress, btnText} = props

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        justifyContent: 'center',
        backgroundColor: '#182635cf',
        alignItems: 'center',
        width: 120,
        borderRadius: 5,
        height: 45,
      }}>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: '#fff',
        }}>
        {btnText}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton
