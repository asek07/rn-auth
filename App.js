import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';


class App extends React.Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCurHKk3clhDoFsSvEmV01WLA1kx3Cn7_4',
      authDomain: 'rn-authentication-33599.firebaseapp.com',
      databaseURL: 'https://rn-authentication-33599.firebaseio.com',
      projectId: 'rn-authentication-33599',
      storageBucket: 'rn-authentication-33599.appspot.com',
      messagingSenderId: '325262244376'
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Header headerTitle={'Authentication'}/>
        <LoginForm />
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

export default App;