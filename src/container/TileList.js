import React, { Component } from 'react'
import { FlatList } from 'react-native'
import Tile from './Tile'
import Shops from './../Helpers/ShopsData'

class TileList extends Component {

    render() {
        return (
            <FlatList
                data={Shops}
                renderItem={({item}) => <Tile shop={item}/>}
                keyExtractor={(item) => item.id.toString()}
                navigation={this.props.navigation}
            />
        )
    }
}

export default TileList;
