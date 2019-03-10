import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import { NavigationActions, StackActions } from 'react-navigation';
import backgrounds from './../styles/backgrounds';
import colors from './../styles/colors';
import RoundedButton from './../components/buttons/RoundedButton';

console.disableYellowBox = true;

class LoggedOut extends Component {

    constructor(props) {
        super(props);
    }

    async onFacebookPress() {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('540592969763996', { permissions: ['public_profile', 'email'] })
        if (type == 'success') {
            const credential = firebase.auth.FacebookAuthProvider.credential(token)
            firebase.auth().signInWithCredential(credential).catch((error) => {
                Alert.alert(error.message);
            })
        }
    }

    onGooglePress = () => {
        alert('Gooooglee')
    }

    onCreateAccountPress = () => {
        this.props.navigation.navigate('SignUp');
    }

    onCreateYourPagePress = () => {
        alert('CreateYourPagePressed')
    }

    onLoginPress = () => {
        this.props.navigation.navigate('LogIn');
    }

    render() {
        return (
            <ImageBackground source={require('./../image/OptiBackground.gif')} style={styles.container} >
                <View style={styles.loginContainer}>
                    <TouchableOpacity onPress={this.onLoginPress}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.welcomeContainer}>
                    <Image
                        source={require('../image/logo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.welcomeText}>Welcome to FastPasss.</Text>
                    <RoundedButton
                        text="Continue with Google"
                        textColor={colors.darkBlue}
                        background={colors.white}
                        icon={<Image style={styles.icon} source={require('./../icon/google-plus-symbol.png')} />}
                        handleOnPress={this.onGooglePress}
                    />
                    <RoundedButton
                        text="Continue with Facebook"
                        textColor={colors.darkBlue}
                        background={colors.white}
                        icon={<Image style={styles.icon} source={require('./../icon/facebook-logo.png')} />}
                        handleOnPress={this.onFacebookPress}
                    />
                    <View style={{ top: 15, }}>
                        <RoundedButton
                            text="Create Account"
                            textColor={colors.white}
                            background={colors.darkBlueMinus}
                            handleOnPress={this.onCreateAccountPress}
                        />
                    </View>
                    <View style={{ position: 'absolute', bottom: 30, paddingLeft: 40, }}>
                        <RoundedButton
                            text="Work with us"
                            textColor={colors.darkBlue}
                            background={colors.white}
                            icon={<Image style={styles.icon} source={require('./../icon/deal.png')} />}
                            handleOnPress={this.onCreateAccountPress}
                        />
                    </View>

                </View>
            </ImageBackground>
        );
    }
}


export default LoggedOut

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
    },
    loginContainer: {
        alignItems: 'flex-end',
        top: 40,
        right: 20,
    },
    loginText: {
        fontSize: 20,
        color: colors.white,
        fontWeight: '500',
    },
    welcomeContainer: {
        flex: 1,
        display: 'flex',
        marginTop: 30,
        padding: 20,
    },
    logo: {
        width: 80,
        height: 80,
        marginTop: 50,
        marginBottom: 20,
        marginLeft: 8,
        tintColor: colors.white,
    },
    welcomeText: {
        fontSize: 30,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40,
    },
    icon: {
        width: 20,
        height: 20,
        position: 'relative',
        left: 25,
        alignItems: 'center',
        tintColor: colors.darkBlue,
    },
    button: {
        marginBottom: 20,
    },
    createYourPageButton: {
        marginTop: 10,
    },
    createYourPageText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '500',
    }
});
