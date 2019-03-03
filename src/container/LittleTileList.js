import React, { Component } from 'react'
import { FlatList } from 'react-native'
import LittleTile from './LittleTile'
import Shops from './../Helpers/ShopsData'

class LittleTileList extends Component {

    render() {
        return (
            <FlatList
                scrollEventThrottle={16}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={Shops}
                renderItem={({ item }) => <LittleTile shop={item} />}
                keyExtractor={(item) => item.id.toString()}
                navigation={this.props.navigation}
            />
        )
    }
}

export default LittleTileList;
