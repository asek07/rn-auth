import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/common';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Header headerTitle={'Authentication'}/>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
