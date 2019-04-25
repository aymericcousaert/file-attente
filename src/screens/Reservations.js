/**************************************
Screen Map :

***************************************/

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { ReservationTileList } from './../container'
import config from './../config'

import * as firebase from 'firebase';

export default class Reservations extends Component {

	constructor(props){
		super(props);
		const { navigation } = this.props;
		this.state = {
			bookingData: [],
			allShopId: [],
		}
	}

	componentWillMount() {
		var bookingData = [];
		var allShopId = [];
		const month = (new Date().getMonth()+1).toString();
		firebase.database().ref('users/' + config.userDetails.uid + '/bookings/' + month +'/').on("value",(snapshot) => {
			snapshot.forEach(function(snap) {
				snap.forEach(function(children){
					children.forEach(function(child){
						bookingData.push({
							month:month,
							day:snap.key,
							hour:children.key,
							minute: child.val().minute,
							placeID: child.val().placeID,
						});
						allShopId.push(child.val().placeID);
					})
				})
			});
			this.setState({bookingData: bookingData});
			this.setState({allShopId: allShopId});
		})
	}


    render() {
        return (
            <View style={config.styles.grandFond}>
                <Text style={{ paddingHorizontal: 20, marginTop: 10, marginBottom: 10, fontWeight: '700', fontSize: 25 }}>Your reservations :</Text>
								  <View style={{ flex: 1, justifyContent: 'space-around' }}>
                <ReservationTileList navigation={this.props.navigation} allShopId={this.state.allShopId} bookingData={this.state.bookingData}/>
								</View>
            </View >
        )
    }
}
