import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation';
import config from '../config'

const { width: WIDTH } = Dimensions.get('window');

class Tile extends Component {

    render() {
        const shop = this.props.shop;
        return (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('EmpPage', { shop }) }}>
                <View style={{ paddingHorizontal: 17, shadowOffSet: { width: 2, height: 2 }, shadowColor: 'black', shadowOpacity: 0.2, elevation: 1 }}>
                    <Image style={styles.image} source={shop.image} />

                    <View style={styles.lowTilesBox}>
                        <View style={styles.lowTilesObj}>
                            <Text style={styles.lowTilesText}> {shop.name} </Text>
                            <Image style={styles.indicAffluDot} source={config.icons.circleIcon} />
                            <Text style={[styles.lowTilesText, { marginLeft: 40, marginRight: 30 }]}> {shop.distance} m</Text>
                            <Image style={styles.routeImg} source={require('../icon/route.png')} />
                        </View>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
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
        color: 'black',
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

export default withNavigation(Tile);
