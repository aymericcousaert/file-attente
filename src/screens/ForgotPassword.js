/**************************************
Screen ForgotPassword :
Allows the user to enter his email
adress in order to send a reset password
email with the firebase integration methods
(reset password mail can be updated so as
the website)
***************************************/
import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  View,
  Image,
  TextInput,
  Button,
  Text,
  Alert,
  Dimensions,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import * as firebase from 'firebase';
import config from './../config';
import BackButton from './../components/BackButton';

const { width: WIDTH } = Dimensions.get('window');

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

class ForgotPassword extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

	onResetPasswordPress = () => {
    firebase.auth().sendPasswordResetEmail(this.state.email)
    .then(() => {
        Alert.alert("Password reset email has been sent.");
    }, (error) => {
        Alert.alert(error.message);
    });
    }

  render() {
		/**************************************
		Render definition of the Sign Up screen
		***************************************/
    return (
      <ImageBackground source={config.loginDesign.backgroundAuth} style={config.loginDesign.backgroundInit}>
        <TouchableOpacity style={config.loginDesign.btnBackBox} onPress={this.goToSignIn} >
          <BackButton style={styles.btnBack} />
        </TouchableOpacity>
        <KeyboardAvoidingView behavior="position" >
          <DismissKeyboard>
            <View>
              <View style={styles.header}>
                <Text style={config.loginDesign.titleTextInit}>Enter your Email adress</Text>
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

              <TouchableOpacity style={styles.btnSend} onPress={this.onResetPasswordPress} >
                <Text style={styles.btnText}>Send Password</Text>
              </TouchableOpacity>
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
    backgroundColor: config.loginDesign.authButtonsColor,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 14,
    position: 'absolute',
    marginBottom: 80,
  },
  btnSend: {
    width: WIDTH / 2 - 40,
    height: 45,
    borderRadius: 25,
    left: (WIDTH / 2 - 40) / 2,
    backgroundColor: config.loginDesign.authButtonsColor,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
    top: 43,
    marginBottom: 80,
  },
  btnText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    textAlign: 'center',
  },
})


export default ForgotPassword
