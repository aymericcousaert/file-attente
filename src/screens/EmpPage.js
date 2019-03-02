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
            <View style={config.styles.grandFond}>
            // Ceci est temporaire, le shop affiché ne correspond pas
                <Tile shop =  {
                  {
                   id:1,
                   latitude: 45.776685,
                   longitude: 4.874372,
                   name: "Shop Name 1",
                   busy: null,
                 }
               } />
            </View>
        )
    }
}

export default EmpPage
