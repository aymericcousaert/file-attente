/**************************************
Screen SignUpScreen :

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
import BackButton from './../components/buttons/BackButton';

const { width: WIDTH } = Dimensions.get('window');

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

class SignUpScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
      id: ""
    };
		/**************************************
		Fetching the last uid available on firebase
		***************************************/
    firebase.database().ref('id/uid').once('value').then(data => {
      this.setState({ id: data.val() })
    })
  }

  goToSignIn = () => {
    this.props.navigation.navigate('LogIn');
  }

  signUpComplete = () => {
    if (this.state.password !== this.state.passwordConfirm) {
      Alert.alert("Passwords do not match");
      return;
    }
		/**************************************
		Creates a user on firebase using then
		email and password while updating the last
		available uid and creating a profil for
		the user with his email (more options to be added)
		***************************************/
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        firebase.database().ref('users/' + this.state.id).set({
          email: this.state.email,
        }),
        firebase.database().ref('id').update({
          uid: this.state.id + 1
        })
      }, (error) => { Alert.alert(error.message); });
  }

  render() {
		/**************************************
		Render definition of the Sign Up screen
		***************************************/
    return (
      <ImageBackground source={config.loginDesign.backgroundAuth} style={config.loginDesign.backgroundInit}>
        <TouchableOpacity style={config.loginDesign.btnBackBox} onPress={this.goToSignIn} >
          <BackButton style={styles.btnBack}> </BackButton>
        </TouchableOpacity>
        <KeyboardAvoidingView behavior="position" >
          <DismissKeyboard>
            <View>
              <View style={styles.header}>
                <Text style={config.loginDesign.titleTextInit}>Sign Up</Text>
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

              <View style={styles.zoneContainer}>
                <View style={styles.boite}>
                  <Image source={config.icons.LockIcon} style={config.loginDesign.iconsLogin} />
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
                  <Image source={config.icons.validateIcon} style={config.loginDesign.iconsLogin} />
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

              <TouchableOpacity onPress={this.signUpComplete} >
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Create Account</Text>
                </View>
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
    marginTop: 29,
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
  btnText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    textAlign: 'center',
  },
})


export default SignUpScreen
