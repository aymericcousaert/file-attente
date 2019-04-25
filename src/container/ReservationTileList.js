import React, { Component } from 'react'
import { FlatList } from 'react-native'
import ReservationTile from './ReservationTile'
import Shops from './../Helpers/ShopsData'

class ReservationTileList extends Component {
  constructor() {
    super();
  }

  render() {
		var shopID = this.props.allShopId;
		var allShops = Shops;
		if(shopID.length > 0){allShops=allShops.filter(allShops => shopID.includes(allShops.id ))}
		const bookingData = this.props.bookingData
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={allShops}
        renderItem={({ item }) => <ReservationTile shop={item} bookingData={bookingData}/>}
        keyExtractor={(item) => item.id.toString()}
        navigation={this.props.navigation}
      />
    )
  }
}

export default ReservationTileList;
