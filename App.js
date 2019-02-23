/**************************************
Class App :

***************************************/
import React from 'react';
import { View, StyleSheet } from 'react-native'
import {createAppContainer, createStackNavigator} from 'react-navigation';
import AppNavigator from './Screens/AppNavigator';
import HomeScreen from './Screens/HomeScreen';
import ApiKeys from './Constants/ApiKeys'
import * as firebase from 'firebase';
import SideBar from './src/navigation/SideBar';

/**************************************
Creation of the App containers one that
routes to the home page (AppHome) and one
that routes to the app's login (AppScreens)
***************************************/
const AppScreens = createAppContainer(AppNavigator);
const HomeNavigator = createStackNavigator({
 	Home: SideBar,
})
const AppHome = createAppContainer(HomeNavigator);

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isAuthenticationReady: false,
			isAuthenticated: false
		}
		/**************************************
		Initializing firebase and checks if user
		is Authenticated, if not we redirect him
		to the AppScreens else he goes directly
		to the HomeScreen (thanks to isAuthenticated).
		***************************************/
		if (!firebase.apps.length) {firebase.initializeApp(ApiKeys.FirebaseConfig);}
		firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
	}
	onAuthStateChanged = (user) => {
		this.setState({isAuthenticationReady: true});
		this.setState({isAuthenticated: !!user});
	}

  render() {
		/**************************************
		Render definition for Log In screen
		***************************************/
    return (
			/**************************************
			Checks if the user can go directly to
			the App's home or not
			***************************************/
			<View style={styles.container}>
      { this.state.isAuthenticated ? <AppHome/> : <AppScreens/> }
			</View>
    );
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
