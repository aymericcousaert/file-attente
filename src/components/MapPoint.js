import React, { Component } from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import MapView, {Marker} from 'react-native-maps';

class MapPoint extends Component {
    render() {
      const shop = this.props.shop
        return (
          <MapView.Marker
          coordinate={{latitude: shop.latitude,  longitude: shop.longitude}}
          title={"title"}
          />
        )
    }
}

export default withNavigation(MapPoint);
