import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
import { Header, Button, Spinner } from './src/components/common';



class App extends React.Component {

  constructor() {
    super();

    this.state = {
      loggedIn: true
    }
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCurHKk3clhDoFsSvEmV01WLA1kx3Cn7_4',
      authDomain: 'rn-authentication-33599.firebaseapp.com',
      databaseURL: 'https://rn-authentication-33599.firebaseio.com',
      projectId: 'rn-authentication-33599',
      storageBucket: 'rn-authentication-33599.appspot.com',
      messagingSenderId: '325262244376'
    })

    // firebase.auth().onAuthStateChanged((user) => {
    //   if(user) {
    //     this.setState({ loggedIn: true })
    //   } else {
    //     this.setState({ loggedIn: false })
    //   }
    // })
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true: 
        return (
         <View style={{marginTop: 20}}>
            <Button text={'Logout'} />
         </View>
        )
      case false: 
        return <LoginForm />;
      default: 
        return (
          <View style={{marginTop: 20, height: 50}}>
            <Spinner size='large'/>
          </View>
        )
    } 
  }  

  render() {
    return (
      <View style={styles.container}>
        <Header headerTitle={'Authentication'}/>
        {this.renderContent()}
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