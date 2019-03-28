import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window');

class MapPreview extends Component {
    render() {
      const shop = this.props.shop;
        return (
          <View>
          <Text style={styles.titleText}>
          {shop.name}{'\n'}
          </Text>
          <Text style={styles.baseText}>
          distance : {shop.distance} m {'\n'}{'\n'}
          </Text>
          <Image style={styles.image} source={shop.image} />
          </View>
        )
    }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
      width: 100,
      height: 100,
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 8,
  }
});

export default withNavigation(MapPreview);
