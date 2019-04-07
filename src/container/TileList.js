import React, { Component } from 'react'
import { FlatList } from 'react-native'
import Tile from './Tile'
import Shops from './../Helpers/ShopsData'

import * as firebase from 'firebase'


class TileList extends Component {
  constructor() {
    super();
    this.shopsRef = firebase.database().ref('/places');
    this.state = ({
      allShops: []
    })
  }
  componentDidMount(){
    var data = [];
    this.shopsRef.on('value', snap =>  {
      snap.forEach(elem => {
        data.push({
          id: elem.child('id').val(),
          name: elem.child('name').val(),
          coordinate: {
            latitude: elem.child('coords/latitude').val(),
            longitude: elem.child('coords/longitude').val(),
          },
          image: elem.child('image').val(),
          distance: elem.child('distance').val(),
          busy: elem.child('busy').val(),
        });
    });
    });
    this.setState({
      allShops: data
    })
  }

    render() {



			var shopName = this.props.shopName;
			if(shopName !== "_all") {allShops=allShops.filter(allShops => allShops.name.includes(shopName))}
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                data={this.state.allShops}
                renderItem={({ item }) => <Tile shop={item} name={shopName} />}
                keyExtractor={(item) => item.id.toString()}
                navigation={this.props.navigation}
            />
        )
    }
}

export default TileList;
