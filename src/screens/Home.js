/**************************************
Screen Home :

***************************************/
import React, { Component } from 'react'
import { View } from 'react-native'
import { TileList } from './../container'
import config from './../config'

class Home extends Component {

    render() {
        return (
            <View style={config.styles.grandFond}>
                <TileList navigation={this.props.navigation} />
            </View >
        )
    }
}

export default Home
