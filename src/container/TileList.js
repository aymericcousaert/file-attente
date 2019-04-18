import React, { Component } from 'react'
import { FlatList } from 'react-native'
import Tile from './Tile'
import Shops from './../Helpers/ShopsData'

class TileList extends Component {
  constructor() {
    super();
  }

  render() {
    var allShops = Shops;
    var shopName = this.props.shopName;
    if (shopName !== "_all") { allShops = allShops.filter(allShops => allShops.name.includes(shopName)) }
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={allShops}
        renderItem={({ item }) => <Tile shop={item} name={shopName} />}
        keyExtractor={(item) => item.id.toString()}
        navigation={this.props.navigation}
      />
    )
  }
}

export default TileList;
