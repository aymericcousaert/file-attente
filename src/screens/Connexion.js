/**************************************
Screen Connexion :

***************************************/
import React from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Image,
  Text,
  Dimensions,
  Alert,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation';
import * as firebase from 'firebase';
import config from './../config';
import logo from './../icon/logo.png';

/**************************************
	Const
	***************************************/
const { width: WIDTH } = Dimensions.get('window');

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

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
      showPass: true,
      press: false,
    };
  }



	/**************************************
	Function definition for Log In screen
	***************************************/
  goToSignUp = () => {
    this.props.navigation.navigate('SignUp');
  }

  goToForgotPassword = () => {
    this.props.navigation.navigate('ForgotPassword');
  }

  logInEmail = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => { },
        (error) => { Alert.alert(error.message); });
  }

	async logInFacebook() {
		const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('540592969763996', { permissions: ['public_profile', 'email'] })
		if (type == 'success') {
			const credential = firebase.auth.FacebookAuthProvider.credential(token)
			firebase.auth().signInWithCredential(credential).catch((error) => {
				Alert.alert(error.message);
			})
		}
	}

  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true })
    } else {
      this.setState({ showPass: true, press: false })
    }
  }

  render() {
		/**************************************
		Render definition for Log In screen
		***************************************/
    return (
      <ImageBackground source={config.loginDesign.backgroundAuth} style={config.loginDesign.backgroundInit}>
        <KeyboardAvoidingView behavior="position">
          <DismissKeyboard>
            <View>
              <View style={config.loginDesign.logoContainerInit}>
                <Image source={logo} style={config.loginDesign.logoInit} />
                <Text style={config.loginDesign.titleTextInit}>FILE ATENTE</Text>
              </View>
              <View style={styles.zoneContainer}>

                <View style={styles.boite}>
                  <Image source={config.icons.emailIcon} style={config.loginDesign.iconsLogin} />
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
              <View style={config.loginDesign.logoContainerInit}>
                <View style={styles.boite}>
                  <Image source={config.icons.LockIcon} style={config.loginDesign.iconsLogin} />
                  <TextInput style={styles.textInputInit}
                    value={this.state.password}
                    onChangeText={(text) => { this.setState({ password: text }) }}
                    placeholder="Password"
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    secureTextEntry={this.state.showPass}
                    autoCapitalize="none"
                    autoCorrect={false}
                    ref={"txtPassword"}
                    returnKeyType="go"

                    onSubmitEditing={() => this.goToHomeScreen()}
                  />
                </View>
                <TouchableOpacity style={styles.iconsEyePos} onPress={this.showPass} >
                  <Image source={this.state.press == false ? config.icons.eyeOpenIcon : config.icons.eyeCloseIcon} style={styles.iconsEyeStyle} />
                </TouchableOpacity>
                <View style={styles.btnContainer}>
                  <TouchableOpacity style={styles.btnSignUp} onPress={this.goToSignUp} >
                    <Text style={styles.btnText}>Sign Up</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnForgot} onPress={this.goToForgotPassword} >
                    <Text style={styles.btnText}>Forgot Password</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnLogin} onPress={this.logInEmail} >
                  <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
								<TouchableOpacity style={styles.btnLogin} onPress={this.logInFacebook} >
                  <Text style={styles.btnText}>Login with Facebook</Text>
                </TouchableOpacity>
              </View>
            </View>
          </DismissKeyboard>
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
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: config.loginDesign.authButtonsColor,
    justifyContent: 'center',
    marginTop: 8,
  },
  btnSignUp: {
    width: WIDTH / 2 - 40,
    height: 45,
    borderRadius: 25,
    backgroundColor: config.loginDesign.authButtonsColor,
    justifyContent: 'center',
    margin: 12,
  },
  btnForgot: {
    width: WIDTH / 2 - 40,
    height: 45,
    borderRadius: 25,
    backgroundColor: config.loginDesign.authButtonsColor,
    justifyContent: 'center',
    margin: 12,
  },
  btnText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    textAlign: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  iconsEyePos: {
    position: 'absolute',
    top: 31,
    right: 37,
  },
  iconsEyeStyle: {
    tintColor: 'rgba(255,255,255,0.7)',
    width: 23,
    height: 23,
  },
})

export default Connexion
