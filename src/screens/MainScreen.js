import React, { Component } from 'react';
import { ScrollView, Text, View, Dimensions } from 'react-native';
import Home from './../screens/Home';
import Map from './../screens/Map';

export default class Mainscreen extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;

        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={false}
                showsHorizontalScrollIndicator={false}
            >
                <Home />
                <Map />
            </ScrollView>
        )
    }
}