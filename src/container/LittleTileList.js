import React, { Component } from 'react'
import { FlatList } from 'react-native'
import LittleTile from './LittleTile'
import Shops from './../Helpers/ShopsData'
import config from './../config'

class LittleTileList extends Component {

    render() {

			var shopID = this.props.allShopId;
			var allShops = Shops;
			if(shopID.length > 0){allShops=Shops.filter(Shops => shopID.includes(Shops.id ))}

        return (
            <FlatList
                scrollEventThrottle={16}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={allShops}
                renderItem={({ item }) => <LittleTile shop={item} />}
                keyExtractor={(item) => item.id.toString()}
                navigation={this.props.navigation}
            />
        )
    }
}

export default LittleTileList;
