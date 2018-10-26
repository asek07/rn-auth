import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';


const Header = ({headerTitle}) => {

  const { viewStyle, headerStyle} = styles

  return (
    <View style={viewStyle}> 
        <Text style={headerStyle}>{headerTitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#686de0',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 5,
    paddingBottom: 5,
    elevation: 2, 
    position: 'relative',
    marginTop: 28
  },
  headerStyle: {  
    fontSize: 20, 
    color: '#fff',
    fontWeight: '600' 
  }
});

export { Header };