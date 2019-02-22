/**************************************
Screen SignUpScreen :

***************************************/
import React from 'react'
import { StyleSheet, View, TextInput, Button, Text } from 'react-native'

class SignUpScreen extends React.Component {
  render() {
		/**************************************
		Render definition of the Sign Up screen
		***************************************/
    return (
      <View>
        <Text style = {styles.decalage}> Sign Up</Text>
        <TextInput style = {styles.textinput} placeholder = 'Email'/>
        <TextInput style = {styles.textinput} placeholder = 'Password'/>
				<TextInput style = {styles.textinput} placeholder = 'Password (confirm)'/>
        <Button title = 'Create Account' onPress={() => {}}/>
      </View>
    )
  }
}

/**************************************
Style Sheet of the page
***************************************/
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


export default SignUpScreen
