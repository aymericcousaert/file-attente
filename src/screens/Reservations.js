import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TileList } from '../container'
import config from './../config'

class Reservations extends Component {

    render() {
        return (
            <View style={config.styles.grandFond}>
                <TileList />
            </View >
        )
    }
}

export default Reservations