import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import config from '../config'

class NewTile extends Component {
    render() {
        return (


            <View style={{ margin: 9 }}>
                <TouchableOpacity onPress={() => { }}>
                    <Image style={styles.image} source={require('../image/ClickHere.png')} />
                </TouchableOpacity>
                <View style={styles.lowTilesBox}>
                    <TextInput style={styles.lowTilesText}>Write your company name here </TextInput>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        borderColor: config.colors.borderColor,
        borderWidth: StyleSheet.hairlineWidth,
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
        top: 8,
        paddingLeft: 20,
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

export default NewTile;