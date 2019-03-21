import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation';
import config from '../config';
import colors from '../styles/colors';

const { width: WIDTH } = Dimensions.get('window');
const { height: HEIGHT } = Dimensions.get('window');

class LittleTile extends Component {

    render() {
        const shop = this.props.shop
        return (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('EmpPage', { shop }) }}>
                <View style={{ paddingLeft: 17, shadowOffSet: { width: 2, height: 2 }, shadowColor: 'black', shadowOpacity: 0.2, elevation: 1 }}>
                    <Image style={styles.image} source={shop.image} />
                    <View style={styles.lowTilesBox}>
                        <View style={styles.lowTilesObj}>
                            <Text style={styles.text}> {shop.name} </Text>
                            <View style={styles.heartContainer}>
                                <Image style={styles.heart} source={config.icons.hearthIcon} />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: WIDTH / 2.6,
        height: HEIGHT / 8,
        borderColor: config.colors.borderColor,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 8,
    },
    lowTilesBox: {
        width: WIDTH / 2.6,
        top: -WIDTH / 32,
        height: HEIGHT / 32,
        backgroundColor: 'white',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderColor: 'rgba(0,0,0,0.4)',
        borderWidth: 0.17,
    },
    lowTilesObj: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 4
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
        backgroundColor: '#414345',
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
