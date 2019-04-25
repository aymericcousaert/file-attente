/**************************************
Screen Home :

***************************************/
import React, { Component } from 'react';
import { View, Image, Text, TextInput, Platform, StatusBar } from 'react-native';
import { TileList, LittleTileList } from './../container';
import BottomTabBar from './../components/BottomTabBar';
import config from './../config';
import Shops from './../Helpers/ShopsData';

import * as firebase from 'firebase';

class Home extends Component {

	constructor(props){
		super(props);
		this.state = {
			searchBarText: "_all",
			allShopId: []
		}
		this.shopDistance();
		this.shopBusy();
	}


	onSearchDo(searchBarText) {
    this.setState({ searchBarText })
		console.log(Shops);
    if (searchBarText === "") {
        return this.setState({ searchBarText: "_all" })
    }
  }

	componentDidMount() {
		var shopID = [];
		firebase.database().ref('users/'+config.userDetails.uid+'/favPlaces').on("value",(snapshot) => {
			snapshot.forEach(function(child) {
				shopID.push(child.val().placeID);
			});
			this.setState({allShopId: shopID})
		});
		firebase.database().ref('users/'+config.userDetails.uid+'/favPlaces').on("child_removed",(snapshot) => {
			shopID = this.state.allShopId.filter(i => i !== snapshot.val().placeID);
			this.setState({allShopId: shopID});
		})
	}
	/**************************************
	Heaversine formula in order to calculate
	the distance between two points in km
	***************************************/
	getDistance = (p1, p2) => {
	  var R = 6378137;
	  var dLat = (p2.latitude - p1.latitude)*Math.PI / 180;
	  var dLong = (p2.longitude - p1.longitude)*Math.PI / 180;
	  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
	    Math.cos((p1.latitude)*Math.PI / 180) * Math.cos((p2.latitude)*Math.PI / 180) *
	    Math.sin(dLong / 2) * Math.sin(dLong / 2);
	  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	  var d = R * c / 1000;
		d = d.toFixed(1);
	  return d;
	};

	shopDistance() {
		Shops.map((shop) => {
			shop.distance=this.getDistance(shop.coordinate,config.userDetails.coordinate);
		})
	}

	shopBusy() {
		Shops.map((shop) => {
			const shopId = shop.id;
			const today = new Date();
			const day = today.getDate().toString();
			const month = (today.getMonth()+1).toString();
			const hour = today.getHours().toString();
			var count = 0;
			const date = month+"/"+day+"/"+hour;
			firebase.database().ref('places/shop' + shopId + '/bookings/'+date).on("value", function(snapshot) {
				snapshot.forEach(function(snap) {
	   			count++;
				})
		  });
			if (count<(10*0.33)) {
				shop.busy = 1;
			} else if (count<(10*0.66)) {
				shop.busy = 2;
			} else shop.busy = 3;
			console.log(shop.name+":"+shop.busy);
		})
	}

    render() {
        return (
            <View style={config.styles.grandFond}>
                <View style={{ top: 10, marginBottom: 10, flexDirection: 'row', padding: 10, backgroundColor: 'white', marginHorizontal: 20, shadowOffSet: { width: 2, height: 2 }, shadowColor: 'black', shadowOpacity: 0.2, elevation: 1, borderRadius: 25, }}>
                    <Image source={config.icons.searchIcon} style={{ marginRight: 10, height: 16, width: 16, opacity: 0.7 }} />
                    <TextInput
                        underlineColorAndroid='transparent'
												onChangeText={(searchBarText) => this.onSearchDo(searchBarText)}
                        placeholder="Try Starbucks"
                        placeholderTextColor="grey"
                        style={{
                            flex: 1, fontWeight: '700', backgroundColor: 'white'
                        }}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: 'space-around' }}>
                    <View>
                        <Text style={{ paddingHorizontal: 20, marginTop: 10, marginBottom: 10, fontWeight: '700', fontSize: 25 }}>Favorites :</Text>
                        <LittleTileList navigation={this.props.navigation} allShopId={this.state.allShopId}/>
                    </View>
                    <Text style={{ paddingHorizontal: 20, marginBottom: 10, fontWeight: '700', fontSize: 25 }}>Close to your position :</Text>
                    <TileList navigation={this.props.navigation} shopName={this.state.searchBarText}/>
                </View>
                <BottomTabBar />
            </View >

        )
    }
}

export default Home
