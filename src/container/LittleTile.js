import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Dimensions, Animated } from 'react-native'
import { withNavigation } from 'react-navigation';
import config from '../config';
import colors from '../styles/colors';

const { width: WIDTH } = Dimensions.get('window');
const { height: HEIGHT } = Dimensions.get('window');

class LittleTile extends Component {

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
            toValue: 0.92
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

        const shop = this.props.shop
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
                            <Text style={styles.text}> {shop.name} </Text>
                            <View style={styles.heartContainer}>
                                <Image style={styles.heart} source={config.icons.hearthIcon} />
                            </View>
                        </View>
                    </View>
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 17,
        //shadowOffSet: { width: 2, height: 2 },
        //shadowColor: 'black',
        //shadowOpacity: 0.2,
        elevation: 1
    },
    image: {
        width: WIDTH / 2.6,
        height: HEIGHT / 8,
        borderColor: config.colors.borderColor,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 2,
    },
    lowTilesBox: {
        width: WIDTH / 2.6,
        top: -WIDTH / 32,
        height: HEIGHT / 32,
        backgroundColor: 'white',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderColor: config.colors.borderColor,
        borderWidth: 0.3,
    },
    lowTilesObj: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 4,
    },
    text: {
        fontSize: 11,
        color: '#232526',
        fontWeight: 'bold'
    },
    heartContainer: {
        right: 4,
        width: 15,
        height: 15,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heart: {
        height: 10,
        width: 10,
        tintColor: colors.fireOrange,
    },
});

export default withNavigation(LittleTile);
