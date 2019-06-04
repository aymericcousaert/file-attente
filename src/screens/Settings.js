/**************************************
Screen Settings :

***************************************/

import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import RoundedButton from './../components/buttons/RoundedButton';
import colors from './../styles/colors';
import * as firebase from 'firebase';

export default class Settings extends Component {


	logOut = () => {
		firebase.auth().signOut().then(function () { }).catch(function (error) {
			// An error happened.
		});
		//this.props.navigation.navigate('AuthStackNavigator')
	}

	toCreateShop = () => {

	}

	render() {

		let screenWidth = Dimensions.get('window').width;
		let screenHeight = Dimensions.get('window').height;

		return (
			<View style={{ flex: 1, position: "space-around" }} >
				<Image
					style={{
						width: screenWidth / 3,
						height: screenHeight / 3,
						position: "absolute",
						marginTop: screenHeight / 4,
						marginLeft: screenWidth / 3,
						alignItems: 'center',
					}}
					source={require('./../image/Setting.gif')}
				/>
				<View style={{ position: 'absolute', bottom: 30, paddingLeft: 40, }}>
					<RoundedButton
						text="Log Out"
						textColor={colors.darkBlue}
						background={colors.white}
						icon={<Image style={styles.icon} source={require('./../icon/sign-out-option.png')} />}
						handleOnPress={() => this.logOut()}
					/>
					<RoundedButton
						text="Work with us"
						textColor={colors.darkBlue}
						background={colors.white}
						icon={<Image style={styles.icon} source={require('./../icon/deal.png')} />}
						handleOnPress={this.toCreateShop}
					/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	icon: {
		width: 20,
		height: 20,
		position: 'relative',
		left: 25,
		alignItems: 'center',
		tintColor: colors.darkBlue,
	},
});
