import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet, Dimensions, Text, View, FlatList, StatusBar } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import LinearGradient from 'expo';
import MapHeader from './../components/MapHeader';
import Shops from './../Helpers/ShopsData';
import MapMarker from './../icon/map-marker.png';
import config from '../config';
import MapCallout from 'react-native-maps';
import MapPreview from './../components/MapPreview';
import * as firebase from 'firebase';

import { NavigationActions, StackActions } from 'react-navigation';

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
    var mapStyle = [
      {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#e0efef"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "hue": "#1900ff"
          },
          {
            "color": "#c0e8e8"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "lightness": 100
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "lightness": 700
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#7dcdcd"
          }
        ]
      }
    ]
    return (

      /* <View style={styles.positionZone}>
          <TouchableOpacity >
            <Image source={config.icons.positionIcon} style={styles.positionIcon} />
          </TouchableOpacity>
        </View>
         */
      /*<Text style = {styles.container} > Latitude: {this.state.initialPosition.latitude} </Text>*/
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor='transparent'
        />
        <View style={styles.container}>
          <MapView style={styles.map}
            region={this.state.initialPosition}
            showsUserLocation={true}
            followUserLocation={true}
            customMapStyle={mapStyle}
            showsMyLocationButton={true}>

            {Shops.map((marker, index) => {
              return (
                <MapView.Marker key={index} coordinate={marker.coordinate}>
                  <MapView.Callout

                    onPress={() => { this.props.navigation.navigate('EmpPage', { shop: marker }) }}
                  >
                    <MapPreview shop={marker} />
                  </MapView.Callout>
                </MapView.Marker>
              );
            })}


          </MapView>
        </View>
      </View >
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
  positionZone: {
    zIndex: 9,
    position: 'absolute',
    width: 45,
    height: 45,
    borderRadius: 25,
    bottom: 190,
    right: 15,
    backgroundColor: '#414345',
  },
  positionIcon: {
    width: 20,
    height: 20,
    top: 13,
    left: 12,
    tintColor: config.colors.secondaryColor,
  }
});

export default Map
