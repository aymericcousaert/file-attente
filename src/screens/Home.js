/**************************************
Screen Home :

***************************************/
import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { TileList } from './../container'
import config from './../config'

class Home extends Component {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Image source={config.icons.menuIcon} style={{ height: 23, width: 23, color: tintColor }} />
        )
    }

    render() {
        return (
            <View style={config.styles.grandFond}>
                <TileList navigation={this.props.navigation} />
            </View >
        )
    }
}

export default Home
