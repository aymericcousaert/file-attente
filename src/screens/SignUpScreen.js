/**************************************
Screen SignUpScreen :

***************************************/
import React from 'react';
import { StyleSheet, View, Image, TextInput, Button, Text, Alert, Dimensions, ImageBackground } from 'react-native';
import * as firebase from 'firebase';
import config from './../config'
import background from './../image/BackImage.png';

const { width: WIDTH } = Dimensions.get('window');

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
      <ImageBackground source={background} style={config.styles.backgroundInit}>
        <View style={config.styles.logoContainerInit}>
          <Text style={config.styles.titleTextInit}>Sign Up</Text>
        </View>
        <View style={styles.zoneContainer}>
          <Image source={config.icons.emailIcon} style={config.styles.iconsLogin} />
          <TextInput style={styles.textInputInit}
            value={this.state.email}
            onChangeText={(text) => { this.setState({ email: text }) }}
            placeholder="Email"
            placeholderTextColor='rgba(255,255,255,0.7)'
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View >
        <View style={styles.zoneContainer}>
          <Image source={config.icons.LockIcon} style={config.styles.iconsLogin} />
          <TextInput style={styles.textInputInit}
            value={this.state.password}
            onChangeText={(text) => { this.setState({ password: text }) }}
            placeholder="Password"
            placeholderTextColor='rgba(255,255,255,0.7)'
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View >
        <View style={styles.zoneContainer}>
          <Image source={config.icons.LockIcon} style={config.styles.iconsLogin} />
          <TextInput style={styles.textInputInit}
            value={this.state.passwordConfirm}
            onChangeText={(text) => { this.setState({ passwordConfirm: text }) }}
            placeholder="Password (confirm)"
            placeholderTextColor='rgba(255,255,255,0.7)'
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View >
        <Button title='Create Account' onPress={this.signUpComplete} />
      </ImageBackground>
    )
  }
}

/**************************************
Style Sheet of the page
***************************************/
const styles = StyleSheet.create({
  zoneContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  textInputInit: {
    width: WIDTH - 55,
    height: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.3)',
    color: 'rgba(255,255,255,0.6)',
    marginHorizontal: 25,
    borderRadius: 25,
    marginTop: 20,
  },
})


export default SignUpScreen
