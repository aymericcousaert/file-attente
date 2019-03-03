/**************************************
Class AppNavigator :

***************************************/
import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Connexion from '../screens/Connexion'
import SignUpScreen from '../screens/SignUpScreen'
import ForgotPassword from '../screens/ForgotPassword'

const AuthStackNavigator = createStackNavigator(
	{
		LogIn: Connexion,
		SignUp: SignUpScreen,
		ForgotPassword: ForgotPassword,
	},
	{
		headerMode: 'none',
		defaultNavigationOptions: {
			gesturesEnabled: false,
		},
	}
)

export default AuthStackNavigator
