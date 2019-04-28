import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions, Animated } from 'react-native'
import { withNavigation } from 'react-navigation';
import config from '../config'
import BouncingComponent from '../components/animated/BouncingComponent'




const { width: WIDTH } = Dimensions.get('window');

class ReservationTile extends Component {

    constructor(props) {
        super(props);
        this.handelPressIn = this.handelPressIn.bind(this);
        this.handelPressOut = this.handelPressOut.bind(this);
        this.onTilePress = this.onTilePress.bind(this);
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
            tension: 20
        }).start()
        this.onTilePress();
    }

    onTilePress() {

    }

    renderElementRed() {
        if (this.props.shop.busy == 3)
            return <Image style={styles.indicAffluDotRed} source={config.icons.circleIcon} />;
        return null;
    }
    renderElementOrange() {
        if (this.props.shop.busy == 2)
            return <Image style={styles.indicAffluDotOrange} source={config.icons.circleIcon} />;
        return null;
    }
    renderElementGreen() {
        if (this.props.shop.busy == 1)
            return <Image style={styles.indicAffluDotGreen} source={config.icons.circleIcon} />;
        return null;
    }

    render() {

        const animatedStyle = {
            transform: [{ scale: this.AnimatedValue }]
        }
        const shop = this.props.shop
        var bookingData = this.props.bookingData
        var booking = [];
        booking = bookingData.filter((bookingData) => bookingData.placeID == shop.id)

        var days = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
        ];

        if (booking.length > 0) {
            bookingText = <Text style={[styles.lowTilesText, { marginLeft: 40, marginRight: 30 }]}>{days[new Date(2019, booking[0].month, booking[0].day, 0, 0, 0, 0).getDay()]} {booking[0].day}/{booking[0].month} - {booking[0].hour}:{booking[0].minute}</Text>
        } else {
            bookingText = <Text style={[styles.lowTilesText, { marginLeft: 40, marginRight: 30 }]}></Text>
        }

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

                            {this.renderElementRed()}
                            {this.renderElementOrange()}
                            {this.renderElementGreen()}

                            {bookingText}
                            <Image style={styles.routeImg} source={config.icons.map2Icon} />
                        </View>
                    </View>

                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
}

export default withNavigation(ReservationTile);


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
        borderRadius: 8,
    },
    lowTilesBox: {
        width: '100%',
        top: -WIDTH / 25,
        height: WIDTH / 10,
        backgroundColor: 'white',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderColor: config.colors.borderColor,
        borderWidth: 0.4,
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
    indicAffluDotRed: {
        width: 10,
        height: 10,
        tintColor: config.colors.red,
        marginLeft: 15
    },
    indicAffluDotGreen: {
        width: 10,
        height: 10,
        tintColor: config.colors.green,
        marginLeft: 15
    },
    indicAffluDotOrange: {
        width: 10,
        height: 10,
        tintColor: config.colors.orange,
        marginLeft: 15
    },
    routeImg: {
        width: 20,
        height: 20,
        marginRight: 20
    }
});
