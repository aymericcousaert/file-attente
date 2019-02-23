import React, { Component } from 'react'
import { FlatList } from 'react-native'
import Tile from './Tile'
class TileList extends Component {
    _renderTile({ item }) {
        return (
            <Tile />
        )
    }

    _returnKey(item) {
        return item.toString();
    }

    render() {
        return (
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
                keyExtractor={this._returnKey}
                renderItem={this._renderTile}
                navigation={this.props.navigation}
            />
        )
    }
}

export default TileList;