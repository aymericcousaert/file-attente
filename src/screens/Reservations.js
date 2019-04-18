/**************************************
Screen Map :

***************************************/

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TileList } from '../container'
import config from './../config'

import * as firebase from 'firebase';

export default class Reservations extends Component {

	constructor(props){
		super(props);
		this.state = {
			bookingData: []
		}
	}

	componentWillMount() {
		var bookingData = [];
		const month = new Date().getMonth().toString();
		firebase.database().ref('users/' + config.userDetails.uid + '/bookings/' + month +'/').on("value",(snapshot) => {
			snapshot.forEach(function(snap) {
				snap.forEach(function(children){
					children.forEach(function(child){
						bookingData.push({
							month:month,
							day:snap.key,
							hour:children.key,
							minute: 0,
							placeID: child.val().placeID,
						});
						console.log(bookingData);
					})
				})
			});
			this.setState({bookingData: bookingData})
		})
	}


    render() {
        return (
            <View style={config.styles.grandFond}>
                <Text style={{ paddingHorizontal: 20, marginTop: 10, marginBottom: 10, fontWeight: '700', fontSize: 25 }}>Your reservations :</Text>
                <TileList />
            </View >
        )
    }
}
