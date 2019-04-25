import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions, Animated } from 'react-native'
import { withNavigation } from 'react-navigation';
import config from '../config'
import BouncingComponent from '../components/animated/BouncingComponent'




const { width: WIDTH } = Dimensions.get('window');

class Tile extends Component {

    constructor(props) {
        super(props);
        this.handelPressIn = this.handelPressIn.bind(this);
        this.handelPressOut = this.handelPressOut.bind(this);
    }

    componentWillMount() {
        this.AnimatedValue = new Animated.Value(1);
    }

    handelPressIn() {
        Animated.spring(this.AnimatedValue, {
            toValue: 0.94
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

        const shop = this.props.shop;

        return (

            <TouchableWithoutFeedback
                onPressIn={this.handelPressIn}
                onPressOut={this.handelPressOut}
                onPress={() => { this.props.navigation.navigate('EmpPage', { shop }) }}
            >
                <Animated.View style={[styles.container, animatedStyle]}>

                    <Image style={styles.image} source={{ uri: shop.image }} />

                    <View style={styles.lowTilesBox}>
                        <View style={styles.lowTilesObj}>

                            <Text style={styles.lowTilesText}> {shop.name} </Text>
                            <Image style={styles.indicAffluDot} source={config.icons.circleIcon} />
                            <Text style={[styles.lowTilesText, { marginLeft: 40, marginRight: 30 }]}> {shop.distance} km</Text>
                            <Image style={styles.routeImg} source={config.icons.map2Icon} />
                        </View>
                    </View>

                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
}

export default withNavigation(Tile);


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 17,
        /*shadowOffSet: {
            width: 2,
            height: 2
        },*/
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 1
    },
    image: {
        width: '100%',
        height: WIDTH / 2,
        borderColor: config.colors.borderColor,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 2,
    },
    lowTilesBox: {
        width: '100%',
        top: -WIDTH / 25,
        height: WIDTH / 10,
        backgroundColor: 'white',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderColor: 'rgba(0,0,0,0.4)',
        borderWidth: 0.17,
    },
    lowTilesObj: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20
    },
    lowTilesText: {
        fontSize: 18,
        color: '#232526',
        fontWeight: 'bold'
    },
    indicAffluDot: {
        width: 10,
        height: 10,
        tintColor: config.colors.red,
        marginLeft: 15
    },
    routeImg: {
        width: 20,
        height: 20,
        marginRight: 20
    }
});


