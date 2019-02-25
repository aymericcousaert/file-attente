/**************************************
Screen SignUpScreen :

***************************************/
import React from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native';
import * as firebase from 'firebase';
import config from './../config'

class SignUpScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
    };
  }

  signUpComplete = () => {
    if (this.state.password !== this.state.passwordConfirm) {
      Alert.alert("Passwords do not match");
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => { }, (error) => { Alert.alert(error.message); });
  }

  render() {
		/**************************************
		Render definition of the Sign Up screen
		***************************************/
    return (
      <View style={styles.background}>
        <Text style={styles.decalage}> Sign Up</Text>
        <TextInput style={styles.textinput}
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text }) }}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput style={styles.textinput}
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password: text }) }}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput style={styles.textinput}
          value={this.state.passwordConfirm}
          onChangeText={(text) => { this.setState({ passwordConfirm: text }) }}
          placeholder="Password (confirm)"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Button title='Create Account' onPress={this.signUpComplete} />
      </View>
    )
  }
}

/**************************************
Style Sheet of the page
***************************************/
const styles = StyleSheet.create({
  background: {
    backgroundColor: config.colors.mainColor,
    width: '100%',
    height: '100%'
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  decalage: {
    marginTop: 200,
    marginBottom: 50,
    textAlign: 'center'
  }
})


export default SignUpScreen
