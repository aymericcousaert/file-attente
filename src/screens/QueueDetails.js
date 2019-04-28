import React, { Component } from 'react';
import { DatePickerIOS, StyleSheet, View, Alert } from 'react-native';
import config from './../config';
import RoundedButton from './../components/buttons/RoundedButton';

import * as firebase from 'firebase'

export default class QueueDetails extends Component {
	constructor(props) {
		super(props);
		//get props from shop
		const { navigation } = this.props;
		const shopid = navigation.getParam('shopId', 'nop');
		var day = new Date().getDate() + 7; //Get day in a week
		var month = new Date().getMonth() + 1; //Current Month
		var year = new Date().getFullYear(); //Current Year
		this.state = {
			shopId: shopid,
			chosenDate: new Date(),
			nextWeekDate: new Date(year, month - 1, day, 0, 0, 0, 0),
			minuteInterval: 5, //replace with shop's desired interval
		};
	}

	setDate = (newDate) => {
		this.setState({ chosenDate: newDate });
	}

	onPressButton = () => {
		const shopId = this.state.shopId;
		const day = this.state.chosenDate.getDate().toString();
		const month = (this.state.chosenDate.getMonth() + 1).toString();
		const hour = this.state.chosenDate.getHours().toString();
		const minute = this.state.chosenDate.getMinutes().toString();
		const date = month + "/" + day + "/" + hour;
		firebase.database().ref('places/shop' + shopId + '/bookings/' + date).push({ uid: config.userDetails.uid, minute: minute }).then(() =>
			firebase.database().ref('users/' + config.userDetails.uid + '/bookings/' + date).push({ placeID: shopId, minute: minute }).then(() =>
				Alert.alert("Congratulations you've just Skipt It")))
	}

	render() {
		return (
			<View style={styles.main_container}>
				<DatePickerIOS
					date={this.state.chosenDate}
					onDateChange={this.setDate}
					minimumDate={new Date()}
					maximumDate={this.state.nextWeekDate}
					minuteInterval={this.state.minuteInterval}
				/>
				<View style={{ position: 'absolute', bottom: 2, paddingLeft: 20, paddingRight: 20 }}>
					<RoundedButton
						textColor={'white'}
						background={'rgba(73,175,235,0.9)'}
						handleOnPress={this.onPressButton}
						text="Let's Skipt !"
					/>
				</View>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	main_container: {
		flex: 1,
		justifyContent: 'space-around',
	},
	button_container: {
		position: 'absolute',
		right: 30,
		top: 30
	}
})
