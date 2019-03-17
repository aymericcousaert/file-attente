/**************************************
Screen Home :

***************************************/
import React, { Component } from 'react';
import { View, Image, Text, TextInput, Platform, StatusBar } from 'react-native';
import { TileList, LittleTileList } from './../container';
import BottomTabBar from './../components/BottomTabBar';
import config from './../config';

import * as firebase from 'firebase';

class Home extends Component {

	constructor(props){
		super(props);
		this.state = {
			searchBarText: "_all",
			allShopId: []
		}
	}


	onSearchDo(searchBarText) {
    this.setState({ searchBarText })
    if (searchBarText === "") {
        return this.setState({ searchBarText: "_all" })
    }
  }

	componentDidMount() {
		const shopID = [];
		firebase.database().ref('users/'+config.userDetails.uid+'/favPlaces').on("value",(snapshot) => {
			snapshot.forEach(function(child) {
				shopID.push(child.val().placeID);
			});
			this.setState({allShopId: shopID})
		})
	}

    render() {
			/*var shopID = [];
			var ref = firebase.database().ref('users/'+config.userDetails.uid+'/favPlaces');
			ref.on("value", function(snapshot) {
			var promises = [];
			snapshot.forEach((snap) => {
				promises.push(snap);
				Promise.all(promises).then((snapshots) => {
					snapshots.forEach((usersnap) => {
						shopID.push(usersnap.val().placeID);
						});
						console.log(shopID);
					})
				})
			})*/
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
