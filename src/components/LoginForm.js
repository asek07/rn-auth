import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import {Card, CardSection, Button, Input, Spinner} from './common'
import firebase from 'firebase';
class LoginForm extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false 
    }
  }

  loginUser = () => {
    const {email, password} = this.state;

    this.setState({ error: '', loading: true})

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.loginSuccess())
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.loginSuccess())
          .catch(this.loginFailed())
      })
  }

  loginSuccess = () => {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    })
  }

  loginFailed = () => {
    this.setState({error: "Authentication Failed.", loading: false});
  }

  renderButton = () => {
    if(this.state.loading) {
      return <Spinner size="small" />
    }

    return (
      <Button text={'Login'} onPress={this.loginUser}/> 
    );

  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            placeholder={"email@example.com"}
            label={'Email'}
            value={this.state.email}
            onChangeText={email => this.setState({email})}
             />
        </CardSection>
        <CardSection>
          <Input 
            secureTextEntry
            placeholder={"Password"}
            label={'Password'}
            value={this.state.password}
            onChangeText={password => this.setState({password})}
             />
        </CardSection>
        <CardSection>
           {this.renderButton()}
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
    fontWeight: '500'
  }
})

export default LoginForm;