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
} from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation';
import * as firebase from 'firebase';
import config from './../config';
import background from './../image/BackImage.png';
import logo from './../icon/logo.png';

const { width: WIDTH } = Dimensions.get('window');
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
  goToHomeScreen = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => { },
        (error) => { Alert.alert(error.message); });
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
      <ImageBackground source={background} style={styles.background}>
        <KeyboardAvoidingView behavior="position">
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.logoText}>FILE ATENTE</Text>
          </View>
          <View style={styles.zoneContainer}>
            <Image source={config.icons.emailIcon} style={config.styles.iconsLogin} />
            <TextInput style={styles.textinput}
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
            <TextInput style={styles.textinput}
              value={this.state.password}
              onChangeText={(text) => { this.setState({ password: text }) }}
              placeholder="Password"
              placeholderTextColor='rgba(255,255,255,0.7)'
              secureTextEntry={this.state.showPass}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TouchableOpacity style={config.styles.iconsEyePos} onPress={this.showPass} >
              <Image source={config.icons.eyeIcon} style={config.styles.iconsEyeStyle} />
            </TouchableOpacity>

            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btnOther} onPress={this.goToSignUp} >
                <Text style={styles.btnText}>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnOther} onPress={this.goToSignUp} >
                <Text style={styles.btnText}>Forgot Password</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btnLogin} onPress={this.goToHomeScreen} >
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>

          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    )
  }
}

/**************************************
Style Sheet of the page
***************************************/
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center'
  },
  zoneContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 120,
    height: 120,
    tintColor: config.colors.secondaryColor,
    opacity: 0.8
  },
  logoText: {
    color: config.colors.secondaryColor,
    fontSize: 20,
    fontWeight: '500',
    marginTop: 30,
    opacity: 0.9,
    marginBottom: 35,
  },
  textinput: {
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
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#19342F',
    justifyContent: 'center',
    marginTop: 8,
  },
  btnOther: {
    width: WIDTH / 2 - 40,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#19342F',
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
})

export default Connexion
