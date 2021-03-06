/**************************************
Class App :

***************************************/
import React from 'react';
import { View, StyleSheet, StatusBar, Alert } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoggedOutStack from './src/navigation/AuthStackNavigator';
import ApiKeys from './src/config/firebase/ApiKeys';
import config from './src/config/';
import * as firebase from 'firebase';
import SideBar from './src/navigation/SideBar';
import TabBar from './src/navigation/TabBar';

/**************************************
Creation of the App containers one that
routes to the home page (AppHome) and one
that routes to the app's login (AuthScreens)
***************************************/
const AuthScreens = createAppContainer(LoggedOutStack);
const HomeNavigator = createStackNavigator(
	{
		Home: TabBar,
	},
	{
		headerMode: 'none',
		defaultNavigationOptions: {
			gesturesEnabled: false,
		},
	}
)
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
		to the Home (thanks to isAuthenticated).
		***************************************/
		if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
		firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
	}

	onAuthStateChanged = (user) => {
		var userEmail = "";
		if (user) { userEmail = user.email }
		firebase.database().ref('users/').orderByChild("email").equalTo(userEmail).once("value").then(snapshot => {
			if (snapshot.val()) {
				config.userDetails.uid = Object.keys(snapshot.val())[0];
				this.setState({ isAuthenticationReady: true });
				this.setState({ isAuthenticated: !!user });
			};
		});
	}

	componentWillMount = () => {
		this.watchId = navigator.geolocation.watchPosition(
			(position) => {
				config.userDetails.coordinate.latitude = position.coords.latitude
				config.userDetails.coordinate.longitude = position.coords.longitude
			},
			(error) => { Alert.alert(error.message) },
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
		);
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
				<StatusBar barStyle='light-content' />
				{this.state.isAuthenticated ? <AppHome /> : <AuthScreens />}
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
