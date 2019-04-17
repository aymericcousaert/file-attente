/**************************************
Screen Map :

***************************************/

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TileList } from '../container'
import config from './../config'

export default class Reservations extends Component {

    render() {
        return (
            <View style={config.styles.grandFond}>
                <Text style={{ paddingHorizontal: 20, marginTop: 10, marginBottom: 10, fontWeight: '700', fontSize: 25 }}>Your reservations :</Text>
                <TileList />
            </View >
        )
    }
}
