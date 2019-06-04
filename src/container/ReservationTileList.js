import React, { Component } from 'react'
import { View, StyleSheet, Text, FlatList, Image, Animated, Dimensions } from 'react-native'
import ReservationTile from './ReservationTile'
import Shops from './../Helpers/ShopsData'

//Creation d'une flatlist animée
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class ReservationTileList extends Component {

  scrollAnimatedValue = new Animated.Value(0);

  constructor() {
    super();
  }

  render() {
    let screenHeight = Dimensions.get('window').height;
    var shopID = this.props.allShopId;
    var allShops = Shops;
    if (shopID.length > 0) { allShops = allShops.filter(allShops => shopID.includes(allShops.id)) }
    const bookingData = this.props.bookingData
    return (
      <View styles={styles.container}>
        <View>
          <Animated.Image
            source={require('./../image/backgroundNuages.png')}
            style={
              [
                styles.topImage,
                {
                  transform:
                    [
                      {
                        translateY: this.scrollAnimatedValue.interpolate({
                          inputRange: [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT],
                          outputRange: [IMAGE_HEIGHT / 2, 0, -IMAGE_HEIGHT / 2],
                          extrapolateRight: 'clamp',
                        })
                      },
                      {
                        scale: this.scrollAnimatedValue.interpolate({
                          inputRange: [-IMAGE_HEIGHT, 0],
                          outputRange: [2, 1],
                          extrapolateRight: 'clamp',
                        })
                      },
                    ]
                }
              ]
            } />
          <Text style={{
            top: IMAGE_HEIGHT - 45,
            fontSize: 40,
            left: 15,
            color: "white",
          }}>Reservations</Text>
        </View>
        <AnimatedFlatList
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.scrollAnimatedValue } } }],
            { useNativeDriver: true },
          )}
          scrollEventThrottle={8} //vistesse de rafraichissement 
          showsVerticalScrollIndicator={true}
          data={allShops}
          renderItem={({ item }) => <ReservationTile shop={item} bookingData={bookingData} />}
          keyExtractor={(item) => item.id.toString()}
          navigation={this.props.navigation}
          contentContainerStyle={
            {
              height: screenHeight,
              marginTop: IMAGE_HEIGHT, // to shift the content container
            }
          }
        />
      </View >
    )
  }
}

const IMAGE_HEIGHT = 200;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
  topImage: {
    position: 'absolute', top: 0,
    height: IMAGE_HEIGHT,
    resizeMode: 'stretch',
  }
});

export default ReservationTileList;
