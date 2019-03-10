/**************************************
Class AppNavigator :

***************************************/
import React from 'react'
import { createStackNavigator } from 'react-navigation'
import LoggedOut from '../screens/LoggedOut';
import Connexion from '../screens/Connexion'
import ForgotPassword from '../screens/ForgotPassword'
import SignUpScreen from '../screens/SignUpScreen';

const FirstStack = createStackNavigator(
	{
		Main: LoggedOut,
		SignUp: SignUpScreen,
	},
	{
		headerMode: 'none',
		defaultNavigationOptions: {
			gesturesEnabled: false,
		},
	}
)

const AuthStackNavigator = createStackNavigator(
	{
		Main: FirstStack,
		ForgotPassword: ForgotPassword,
		LogIn: Connexion,
	},
	{
		headerMode: 'none',
		defaultNavigationOptions: {
			gesturesEnabled: false,
		},
	}
)

export default AuthStackNavigator
