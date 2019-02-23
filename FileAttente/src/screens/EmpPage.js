import React, { Component } from 'react'
import { View } from 'react-native'
import Tile from './../container/Tile'
import config from './../config'

class EmpPage extends Component {
    render() {
        return (
            <View style={config.styles.grandFond}>
                <Tile />
            </View>
        )
    }
}

export default EmpPage