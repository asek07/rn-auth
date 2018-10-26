import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({onPress, text}) => {

  const { buttonStyle, buttonText } = styles;

  return (
   <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={buttonText}>{text}</Text>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1, 
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5, 
    marginRight: 5
  },
  buttonText: {
    alignSelf: 'center',
    padding: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#007aff'
  }
})

export { Button };