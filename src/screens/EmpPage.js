/**************************************
Screen EmpPage :

***************************************/
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert, Image, Dimensions } from 'react-native';
import Tile from './../container/Tile';
import config from './../config';
import RoundedButton from './../components/buttons/RoundedButton';
import colors from './../styles/colors';
import { NavigationActions, StackActions } from 'react-navigation';
import * as firebase from 'firebase';



const { width: WIDTH } = Dimensions.get('window').width;
const { height: HEIGHT } = Dimensions.get('window').height;

class EmpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopsId: 2,
        };
    }

    onAddToFav = () => {
        firebase.database().ref('users/' + config.userDetails.uid + '/favPlaces/').orderByChild("placeID").equalTo(this.state.shopsId).once("value").then(snapshot => {
            if (snapshot.val()) {
                Alert.alert("Already a favorite");
                /*var newId = firebase.database().ref('users/1/favPlaces/').orderByChild("placeID").equalTo(this.state.shopsId);
                firebase.database().ref('users/1/favPlaces/'+newId).remove();*/
            } else {
                firebase.database().ref('users/' + config.userDetails.uid + '/favPlaces/').push({ placeID: this.state.shopsId }).then(() =>
                    Alert.alert("Added to favorites"))
            }
        })
		/*
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
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <Image source={require('./../image/Paul.jpg')} style={styles.imageContainer} />
                    <Text >Pas encore fini</Text>

                    <View style={styles.favContainer} >
                        <TouchableOpacity onPress={this.onAddToFav} >
                            <Image source={config.icons.hearthIcon} style={styles.favIcon} />
                        </TouchableOpacity>
                    </View>

                </ScrollView>

                <View style={{ position: 'absolute', bottom: 20, padding: 20 }}>
                    <RoundedButton
                        textColor={colors.white}
                        background={'#414345'}
                        handleOnPress={this.onGoToQueueDetails}
                        text="Availability"
                    />
                </View>
            </View>
        )
    }
}

export default EmpPage

const styles = StyleSheet.create({
    container: {
        height: HEIGHT,
        flex: 1,
    },
    imageContainer: {
        height: 220,
    },
    favContainer: {
        zIndex: 4,
        position: 'absolute',
        top: 200,
        right: 20,
        width: 45,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#414345',
        justifyContent: 'center',
        alignItems: 'center',
    },
    favIcon: {
        height: 28,
        width: 28,
        tintColor: 'coral',
    }
});
