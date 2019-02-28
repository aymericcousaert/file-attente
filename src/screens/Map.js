import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Dimensions, Text, View } from 'react-native';
import MapView from 'react-native-maps';

const {width, height} = Dimensions.get('window')

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
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
       var lat = parseFloat(position.coords.latitude)
       var long = parseFloat(position.coords.longitude)

       var initialRegion = {
         latitude: lat,
         longitude: long,
         latitudeDelta: LATITUDE_DELTA,
         longitudeDelta: LONGITUDE_DELTA,
       }

       this.setState({initialPosition: initialRegion})
     },
     (error) => alert(JSON.stringify(error)),
     {enableHighAccuracy: true, timeout: 20000});
  }



    render() {
        return (
                /*<Text style = {styles.container} > Latitude: {this.state.initialPosition.latitude} </Text>*/
                <View style={styles.container}>
                <MapView  style={styles.map}
                  region={this.state.initialPosition}
                  showsUserLocation={true}
                  followUserLocation={true}
                />
                </View>
        )
    }
}

const styles = StyleSheet.create({
  map: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    position: 'absolute'
  },
  container: {
   position: 'absolute',
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
});

export default Map
