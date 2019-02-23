import React, { Component } from 'react';
import { ImageBackground } from 'react-native';

class Map extends Component {
    render() {
        return (
            <ImageBackground source={require('./../image/fakemap.jpg')} style={{ width: '100%', height: '100%' }}>
            </ImageBackground>
        )
    }
}

export default Map
