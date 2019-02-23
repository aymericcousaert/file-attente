import React, { Component } from 'react'
import { View } from 'react-native'
import { ValidateEmpButton } from './../components'
import NewTile from './../container/NewTile'
import config from './../config'

class EmpPage extends Component {
    render() {
        return (
            <View style={config.styles.grandFond}>
                <NewTile />
                <ValidateEmpButton />
            </View>
        )
    }
}

export default EmpPage