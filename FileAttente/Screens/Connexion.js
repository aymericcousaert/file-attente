/**************************************
Screen Connexion :

***************************************/
import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, KeyboardAvoidingView } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';

class Connexion extends React.Component {
	/**************************************
	Function definition for Log In screen
	***************************************/
	goToSignUp = () =>
  {
     this.props.navigation.navigate('SignUp');
  }
	goToHomeScreen = () =>
	{
		 this.props.navigation.navigate('HomeScreen');
	}
  render() {
		/**************************************
		Render definition for Log In screen
		***************************************/
    return (
			<KeyboardAvoidingView behavior = "position" style = {styles.container}>
        <Text style = {styles.decalage}> Welcome back !</Text>
        <TextInput
				style = {styles.textinput}
				placeholder = 'Email'
				returnKeyType = "next"
				onSubmitEditing = {() => this.passwordInput.focus()}
				keyboardType = "email-address"
				autoCapitalize = "none"
				autoCorrect = {false}
				/>
        <TextInput
				style = {styles.textinput}
				placeholder = 'Mot de Passe'
				secureTextEntry
				returnKeyType = "go"
				ref = {(input) => this.passwordInput = input}
				/>
				<Button onPress = { this.goToHomeScreen } title = 'Se connecter'/>
        <Button onPress = { this.goToSignUp } title = "S'inscrire"/>
			</KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
	container: {
		flex: 1
	},
  decalage: {
    marginTop: 200,
    marginBottom: 50,
    textAlign: 'center'
  }
})

export default Connexion
