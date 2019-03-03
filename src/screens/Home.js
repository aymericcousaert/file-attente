/**************************************
Screen Home :

***************************************/
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { TileList } from './../container';
import BottomTabBar from './../components/BottomTabBar';
import config from './../config';

class Home extends Component {

    render() {
        return (
            <View style={config.styles.grandFond}>
                <TileList navigation={this.props.navigation} />
                <BottomTabBar />
            </View >
        )
    }
}

export default Home
