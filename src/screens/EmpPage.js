/**************************************
Screen EmpPage :

***************************************/
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, ScrollView, StyleSheet, Alert, Image, Dimensions, Animated } from 'react-native';
import config from './../config';
import RoundedButton from './../components/buttons/RoundedButton';
import colors from './../styles/colors';
import BackButton from './../components/buttons/BackButton';
import * as firebase from 'firebase';



const { width: WIDTH } = Dimensions.get('window').width;
const { height: HEIGHT } = Dimensions.get('window').height;

export default class EmpPage extends Component {
    constructor(props) {
        super(props);
        //get props from shop
        const { navigation } = this.props;
        const shop = navigation.getParam('shop', 'nop');
        this.state = {
            shopId: shop.id,
            shopName: shop.name,
            shopImage: shop.image,
            isFav: false,
        };
        this.handelPressIn = this.handelPressIn.bind(this);
        this.handelPressOut = this.handelPressOut.bind(this);

    }

    static navigationOptions = {
        headerTitle: '',
    }

    onAddToFav = () => {
        firebase.database().ref('users/' + config.userDetails.uid + '/favPlaces/').orderByChild("placeID").equalTo(this.state.shopId).once("value").then(snapshot => {
            if (snapshot.val()) {
                firebase.database().ref('users/' + config.userDetails.uid + '/favPlaces/' + Object.keys(snapshot.val())[0]).remove().then(() =>
                    //Alert.alert("Removed from favorites"),
                    this.setState({ isFav: false }),
                )
            } else {
                firebase.database().ref('users/' + config.userDetails.uid + '/favPlaces/').push({ placeID: this.state.shopId }).then(() =>
                    //Alert.alert("Added to favorites"),
                    this.setState({ isFav: true }),
                    //Alert.alert(this.state.isFav.toString())
                )
            }
        })
    }

    onGoToQueueDetails = () => {
        const shopId = this.state.shopId;
        this.props.navigation.navigate('QueueDetails', { shopId });
    }

    componentWillMount() {
        this.AnimatedValue = new Animated.Value(1);
        //Permet au chargement de la page ou a chaque changement sur le serveur d'actualiser la valeur de IsFav qui indique si la page est un fav de l'user.
        firebase.database().ref('users/' + config.userDetails.uid + '/favPlaces/').orderByChild("placeID").equalTo(this.state.shopId).once("value").then(snapshot => {
            if (snapshot.val()) {
                this.setState({ isFav: true });
            } else {
                this.setState({ isFav: false });
            };
        })
    }

    handelPressIn() {
        Animated.spring(this.AnimatedValue, {
            toValue: 1.3
        }
        ).start();
    }

    handelPressOut() {
        Animated.spring(this.AnimatedValue, {
            toValue: 1,
            friction: 3,
            tension: 40
        }).start()
    }

    render() {
        const animatedStyle = {
            transform: [{ scale: this.AnimatedValue }]
        }
        const animatedLike = {
            transform: [{ scale: this.AnimatedValue }]
        }
        const heartColor = this.state.isFav ? colors.fireOrange : colors.white;

        return (
            <View style={{ flex: 1 }} >
                <View style={styles.backContainer}>
                    <BackButton />
                </View>
                <ScrollView style={styles.container}>
                    <View style={styles.imageContainer} >
                        <Image source={{ uri: this.state.shopImage }} style={styles.image} />
                    </View>
                    <Text style={styles.headerTitle}>{this.state.shopName}</Text>
                    <Animated.View style={styles.favContainer}>
                        <TouchableWithoutFeedback
                            onPressIn={this.handelPressIn}
                            onPressOut={this.handelPressOut}
                            onPress={this.onAddToFav}
                        >
                            <Animated.Image source={config.icons.hearthIcon} style={[styles.favIcon, { tintColor: heartColor }, animatedStyle]} />
                        </TouchableWithoutFeedback>
                    </Animated.View>
                    <Text style={styles.empDesc}>
                        -----Shop Description-----
                    </Text>
                    <Text style={styles.headerMap}>How to go :</Text>
                    <Image
                        style={{
                            height: 200,
                            width: WIDTH,
                            margin: 20,
                            top: 150,
                        }}
                        source={require('./../image/unecarte.png')}
                    />
                </ScrollView>

                <View style={{ position: 'absolute', bottom: 2, paddingLeft: 20, paddingRight: 20 }}>
                    <RoundedButton
                        textColor={colors.white}
                        background={'rgba(73,175,235,0.9)'}
                        handleOnPress={this.onGoToQueueDetails}
                        text="Availability"
                    />
                </View>
            </View >
        )
    }
}

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
    backContainer: {
        zIndex: 6,
        position: 'absolute',
        top: 40,
        left: 20,
        width: 45,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#414345',
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    headerTitle: {
        paddingHorizontal: 20,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: '700',
        fontSize: 30
    },
    empDesc: {
        paddingHorizontal: 20,
    },
    headerMap: {
        paddingHorizontal: 20,
        marginTop: 10,
        marginBottom: -10,
        fontWeight: '700',
        fontSize: 20,
        top: 145,
    },
});
