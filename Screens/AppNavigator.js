/**************************************
Class AppNavigator :

***************************************/
import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Connexion from './Connexion'
import SignUpScreen from './SignUpScreen'

const AppStackNavigator = createStackNavigator({
 	LogIn: Connexion,
	SignUp: SignUpScreen,
})

export default AppStackNavigator
