import React, { Component } from 'react'
import { FlatList } from 'react-native'
import LittleTile from './LittleTile'
import Shops from './../Helpers/ShopsData'
import config from './../config'
import * as firebase from 'firebase'

class LittleTileList extends Component {

  constructor() {
    super();
  }


    render() {

			var shopID = this.props.allShopId;
			var allShops = Shops;
			if(shopID.length > 0){allShops=allShops.filter(allShops => shopID.includes(allShops.id ))}

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
