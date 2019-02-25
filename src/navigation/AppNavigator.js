/**************************************
Class AppNavigator :

***************************************/
import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Connexion from '../screens/Connexion'
import SignUpScreen from '../screens/SignUpScreen'

const AppStackNavigator = createStackNavigator(
	{
		LogIn: Connexion,
		SignUp: SignUpScreen,
	},
	{
		headerMode: 'none',
		defaultNavigationOptions: {
			gesturesEnabled: false,
		},
	}
)

export default AppStackNavigator
