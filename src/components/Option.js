import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

const Option = props => {
  const {onPress, text} = props

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 190,
        height: 100,
        marginVertical: 5,
        marginHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#182635cf',
        borderRadius: 8,
        justifyContent: 'space-evenly',
      }}>
      <Text style={{color: '#fff', fontSize: 15}}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Option
