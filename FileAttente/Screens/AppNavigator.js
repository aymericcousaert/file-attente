import React from 'react'
import {createStackNavigator} from 'react-navigation'
import Connexion from './Connexion'
import SignUpScreen from './SignUpScreen'
import HomeScreen from './HomeScreen'

const AppStackNavigator = createStackNavigator({
 	LogIn: Connexion,
	SignUp: SignUpScreen,
	HomeScreen: HomeScreen
})

export default AppStackNavigator
