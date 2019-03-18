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
        //choper le sprops de shop 
        const { navigation } = this.props;
        const shop = navigation.getParam('shop', 'nop');
        this.state = {
            shopId: JSON.stringify(shop.id),
            shopName: shop.name,
            shopImage: shop.image,
        };
        alert(this.state.shopId);
    }

    static navigationOptions = {
        headerTitle: '',
    }

    onAddToFav = () => {
        firebase.database().ref('users/' + config.userDetails.uid + '/favPlaces/').orderByChild("placeID").equalTo(this.state.shopsId).once("value").then(snapshot => {
            if (snapshot.val()) {
                firebase.database().ref('users/' + config.userDetails.uid + '/favPlaces/' + Object.keys(snapshot.val())[0]).remove().then(() =>
                    Alert.alert("Removed from favorites"))
            } else {
                firebase.database().ref('users/' + config.userDetails.uid + '/favPlaces/').push({ placeID: this.state.shopsId }).then(() =>
                    Alert.alert("Added to favorites"))
            }
        })
    }

    onGoToQueueDetails = () => {
        this.props.navigation.navigate('QueueDetails');
    }

    render() {
        return (
            // Ceci est temporaire, le shop affiché ne correspond pas
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <View style={styles.imageContainer} >
                        <Image source={this.state.shopImage} style={styles.image} />
                    </View>
                    <Text style={styles.headerTitle}>{this.state.shopName}</Text>

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
    image: {
        height: '100%',
        width: '100%',
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
    },
    headerTitle: {
        paddingHorizontal: 20,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: '700',
        fontSize: 25
    }
});
