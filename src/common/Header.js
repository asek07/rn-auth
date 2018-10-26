import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';


const Header = ({headerTitle}) => {
  return (
    <View style={styles.viewStyle}> 
        <Text style={styles.headerStyle}>{headerTitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#ff7979',
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
    color: '#fff' 
  }
});

export { Header };