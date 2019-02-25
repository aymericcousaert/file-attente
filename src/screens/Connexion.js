/**************************************
Screen Connexion :

***************************************/
import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, Alert, KeyboardAvoidingView } from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation';
import * as firebase from 'firebase';
import config from './../config'

class Connexion extends React.Component {

	/**************************************
	Constructor of Connexion :
	Initializes the state of the screen and
	the user's email and password
	***************************************/
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

	/**************************************
	Function definition for Log In screen
	***************************************/
  goToSignUp = () => {
    this.props.navigation.navigate('SignUp');
  }
  goToHomeScreen = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => { },
        (error) => { Alert.alert(error.message); });
  }

  render() {
		/**************************************
		Render definition for Log In screen
		***************************************/
    return (
      <View style={styles.background}>
        <KeyboardAvoidingView behavior="position">
          <Text style={styles.decalage}> Welcome back !</Text>
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
          <Button onPress={this.goToHomeScreen} title='Log In' />
          <Button onPress={this.goToSignUp} title='Sign Up' />
          <Button onPress={this.goToSignUp} title='Forgot Password' />
        </KeyboardAvoidingView>
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
    backgroundColor: config.colors.secondaryColor,
    borderColor: config.colors.borderColor,
    borderWidth: StyleSheet.hairlineWidth,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    height: 50,
    borderBottomRightRadius: 23,
    borderTopLeftRadius: 23
  },
  decalage: {
    marginTop: 200,
    marginBottom: 50,
    textAlign: 'center'
  }
})

export default Connexion
