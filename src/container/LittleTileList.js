import React, { Component } from 'react'
import { FlatList } from 'react-native'
import LittleTile from './LittleTile'
import Shops from './../Helpers/ShopsData'
import config from './../config'
import * as firebase from 'firebase'

class LittleTileList extends Component {

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

			var shopID = this.props.allShopId;
			var allShops = this.state.allShops;
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
