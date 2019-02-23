/**************************************
Screen HomeScreen :

***************************************/
import React from 'react'
import { StyleSheet, View, TextInput, Button, Text } from 'react-native'

class HomeScreen extends React.Component {

  goToConnexion = () =>
  {
		this.props.navigation.navigate('SignUp');
  }

  render() {
		/**************************************
		Render definition of the Home screen
		***************************************/
    return (
      <View>
        <Text> Home </Text>
        <Button onPress = { this.goToConnexion } title = 'Sign out'/>
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


export default HomeScreen
