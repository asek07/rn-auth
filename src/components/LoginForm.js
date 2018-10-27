import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import {Card, CardSection, Button, Input} from './common'

class LoginForm extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
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
            <Button text={'Login'}/> 
        </CardSection>
      </Card>
    )
  }
}

// const styles = StyleSheet.create({
//   inputTextStyle: {
//     height: 20,
//     width: 100
//   }
// })

export default LoginForm;