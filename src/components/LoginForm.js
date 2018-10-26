import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import {Card, CardSection, Button, Input} from './common'

class LoginForm extends Component {

  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label={'Email'}
            value={this.state.text}
            onChangeText={text => this.setState({text})}
             />
        </CardSection>
        <CardSection />
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