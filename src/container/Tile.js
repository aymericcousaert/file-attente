import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation';
import config from '../config'

class Tile extends Component {

    render() {
      const shop = this.props.shop
        return (

            <TouchableOpacity onPress={() => { this.props.navigation.navigate('EmpPage') }}>
                <View style={{ margin: 9 }}>
                    <Image style={styles.image} source={require('../image/Starbucks.jpg')} />

                    <View style={styles.lowTilesBox}>
                        <View style={styles.lowTilesObj}>
                            <Text style={styles.lowTilesText}> {shop.name} </Text>
                            <Image style={styles.indicAffluDot} source={config.icons.circleIcon} />
                            <Text style={[styles.lowTilesText, { marginLeft: 40, marginRight: 30 }]}> 200 m</Text>
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
        height: 200,
        borderColor: config.colors.borderColor,
        borderRightWidth: StyleSheet.hairlineWidth,
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    lowTilesBox: {
        width: '100%',
        height: 40,
        backgroundColor: config.colors.secondaryColor,
        borderColor: config.colors.borderColor,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderRightWidth: StyleSheet.hairlineWidth,
        borderBottomLeftRadius: 23,
        borderBottomRightRadius: 23
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
