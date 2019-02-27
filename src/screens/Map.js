import React, { Component } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

class Map extends Component {
    render() {
        return (

              <MapView  style={styles.map}
               initialRegion={{
               latitude: 37.78825,
               longitude: -122.4324,
               latitudeDelta: 0.0922,
               longitudeDelta: 0.0421,
              }}
              />
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
});

export default Map
