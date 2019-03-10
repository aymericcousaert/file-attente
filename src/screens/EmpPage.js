/**************************************
Screen EmpPage :

***************************************/
import React, { Component } from 'react'
import { View, Text, Button, Alert} from 'react-native'
import Tile from './../container/Tile'
import config from './../config'
import { NavigationActions, StackActions } from 'react-navigation';
import * as firebase from 'firebase';

class EmpPage extends Component {
			 {if (snapshot.val()) {
		            Alert.alert("Already a favorite");
								firebase.database().ref('users/1/favPlaces/'+newId).remove();*/
		        } else {
							firebase.database().ref('users/1/favPlaces/').push({placeID: this.state.shopsId}).then(() =>
						}
		    })
			firebase.database().ref('users/1/favPlaces/').push({placeID: this.state.shopsId}).then(() =>
			Alert.alert(id))
			*/
  }

	onGoToQueueDetails = () => {
		  this.props.navigation.navigate('QueueDetails');
  }

    render() {
        return (
            // Ceci est temporaire, le shop affiché ne correspond pas
						<View style={{flex :1,flexDirection : 'column', justifyContent: 'space-around', alignItems: "center"}}>
							<Text>Shop</Text>
							<Button
								onPress={this.onAddToFav}
								title="Add to Favorites"
								/>
							<Button
								onPress={this.onGoToQueueDetails}
								title="Availability"
								/>
						</View >
        )
    }
}

export default EmpPage
