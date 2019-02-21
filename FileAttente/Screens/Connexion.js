import React from 'react'
import { StyleSheet, View, TextInput, Button, Text } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';

class Connexion extends React.Component {

	goToSignUp = () =>
  {
     this.props.navigation.navigate('SignUp');
  }

	goToHomeScreen = () =>
	{
		 this.props.navigation.navigate('HomeScreen');
	}
  render() {
    return (
      <View>
        <Text style = {styles.decalage}> Welcome back !</Text>
        <TextInput style = {styles.textinput} placeholder = 'Username'/>
        <TextInput style = {styles.textinput} placeholder = 'Password'/>
				<Button onPress = { this.goToHomeScreen } title = 'Log In'/>
        <Button onPress = { this.goToSignUp } title = 'Sign Up'/>
      </View>
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
  decalage: {
    marginTop: 200,
    marginBottom: 50,
    textAlign: 'center'
  }
})

export default Connexion
