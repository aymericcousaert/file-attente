/**************************************
Screen SignUpScreen :

***************************************/
import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, KeyboardAvoidingView, View, Image, TextInput, Button, Text, Alert, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import config from './../config';
import background from './../image/BackImage.png';
import BackButton from './../components/BackButton';

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

  goToSignIn = () => {
    this.props.navigation.navigate('LogIn');
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
      <TouchableOpacity style={styles.btnBackBox} onPress={this.goToSignIn} >
        <BackButton style={styles.btnBack}> </BackButton>
      </TouchableOpacity>
        <KeyboardAvoidingView behavior="position" >
          <View style={styles.header}>
            <Text style={config.styles.titleTextInit}>Sign Up</Text>
          </View>
          <View style={styles.zoneContainer}>
            <View style={styles.boite}>
              <Image source={config.icons.emailIcon} style={config.styles.iconsLogin} />
              <TextInput style={styles.textInputInit}
                value={this.state.email}
                onChangeText={(text) => { this.setState({ email: text }) }}
                placeholder="Email"
                placeholderTextColor='rgba(255,255,255,0.7)'
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                onSubmitEditing={() => this.refs.txtPassword.focus()}
              />
            </View>
          </View>

          <View style={styles.zoneContainer}>
            <View style={styles.boite}>
              <Image source={config.icons.LockIcon} style={config.styles.iconsLogin} />
              <TextInput style={styles.textInputInit}
                value={this.state.password}
                onChangeText={(text) => { this.setState({ password: text }) }}
                placeholder="Password"
                placeholderTextColor='rgba(255,255,255,0.7)'
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                ref={"txtPassword"}
                returnKeyType="next"
                onSubmitEditing={() => this.refs.lastPasswordCheck.focus()}
              />
            </View>
          </View>
          <View style={styles.zoneContainer}>
            <View style={styles.boite}>
              <Image source={config.icons.validateIcon} style={config.styles.iconsLogin} />
              <TextInput style={styles.textInputInit}
                value={this.state.passwordConfirm}
                onChangeText={(text) => { this.setState({ passwordConfirm: text }) }}
                placeholder="Password (confirm)"
                placeholderTextColor='rgba(255,255,255,0.7)'
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="go"
                ref={"lastPasswordCheck"}
                onSubmitEditing={() => this.signUpComplete()}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.btn} onPress={this.signUpComplete} >
            <Text style={styles.btnText}>Create Account</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ImageBackground >
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
  header: {
    alignItems: 'center',
  },
  textInputInit: {
    width: WIDTH - 55,
    height: 45,
    fontSize: 16,
    paddingLeft: 24,
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25,
    borderRadius: 25,
    marginTop: 4,
  },
  boite: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    marginTop: 20,
  },
  btn: {
    width: WIDTH / 2 - 40,
    height: 45,
    borderRadius: 25,
    left: (WIDTH / 2 - 40) / 2,
    backgroundColor: '#19342F',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
    top: 43,
    marginBottom: 80,
  },
  btnBackBox: {
    width: 45,
    height: 45,
    borderRadius: 25,

    backgroundColor: '#19342F',


  },
  btnBack: {


  },
  btnText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    textAlign: 'center',
  },
})


export default SignUpScreen
