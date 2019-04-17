import React, { Component } from 'react'
import {DatePickerIOS, StyleSheet, View, Text, Button, Alert} from 'react-native'
import config from './../config';

import * as firebase from 'firebase'

export default class QueueDetails extends Component {
		constructor(props) {
				super(props);
				//get props from shop
				const { navigation } = this.props;
				const shopid = navigation.getParam('shopId', 'nop');
				var day = new Date().getDate()+7; //Get day in a week
		    var month = new Date().getMonth() //Current Month
		    var year = new Date().getFullYear(); //Current Year
				this.state = {
						shopId: shopid,
						chosenDate: new Date(),
						nextWeekDate: new Date(year, month, day, 0, 0, 0, 0),
				};
		}

		setDate = (newDate) => {
			this.setState({chosenDate: newDate});
		}

		onPressButton = () => {
			const shopId = this.state.shopId;
			const day = this.state.chosenDate.getDate().toString();
			const month = this.state.chosenDate.getMonth().toString();
			const hour = this.state.chosenDate.getHours().toString();
			const date = month+"/"+day+"/"+hour;
			firebase.database().ref('places/shop' + shopId + '/bookings/'+date).push({ uid: config.userDetails.uid }).then(() =>
				firebase.database().ref('users/'+config.userDetails.uid+'/bookings/'+date).push({ shopId: shopId }).then(() =>
					Alert.alert("congratulations you've just Skipt It")))
    }

    render() {
        return (
            <View style={styles.main_container}>
        				<DatePickerIOS
          				date={this.state.chosenDate}
          				onDateChange={this.setDate}
									minimumDate = {new Date()}
									maximumDate = {this.state.nextWeekDate}
        					/>
              <Button onPress={this.onPressButton} title="Skip it!"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex:1,
        justifyContent:'space-around',
    },
    button_container: {
        position:'absolute',
        right:30,
        top:30
    }
})
