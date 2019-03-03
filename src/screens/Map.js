import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Dimensions, Text, View, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BottomTabBar from './../components/BottomTabBar';
import Shops from './../Helpers/ShopsData';
import MapPoint from './../components/MapPoint';
import MapMarker from './../icon/map-marker.png';

const { width, height } = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0222
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class Map extends Component {
  constructor() {
    super()
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
      markers: Shops
    }

    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }

      this.setState({ initialPosition: initialRegion })
    },
      (error) => alert(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000 });
  }





  render() {
    return (


      /*<Text style = {styles.container} > Latitude: {this.state.initialPosition.latitude} </Text>*/
      <View style={styles.container}>
        <MapView style={styles.map}
          region={this.state.initialPosition}
          showsUserLocation={true}
          followUserLocation={true}>

          {this.state.markers.map((marker, index) => {
            return (
              <MapView.Marker key={index} coordinate={marker.coordinate} />
            );
          })}


        </MapView>
        <BottomTabBar />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  container: {
    flex: 1
  },
});

export default Map
