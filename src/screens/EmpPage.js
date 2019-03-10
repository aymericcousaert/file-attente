/**************************************
Screen EmpPage :

***************************************/
import React, { Component } from 'react'
import { View } from 'react-native'
import Tile from './../container/Tile'
import config from './../config'

class EmpPage extends Component {

    render() {
        return (
            <View>
                <Tile shop={this.props.shop} />
            </View>
        )
    }
}

export default EmpPage
