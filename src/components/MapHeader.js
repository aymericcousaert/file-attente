import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import MenuButton from './buttons/MenuButton';
import ReservationButton from './buttons/ReservationButton';
import config from './../config'
import { withNavigation } from 'react-navigation';
import { LinearGradient } from 'expo';

const { width: WIDTH } = Dimensions.get('window');

class MapHeader extends Component {
    render() {
        return (
            <View style={styles.headerZone}>
                <LinearGradient
                    colors={['#232526', '#414345']}
                    style={styles.btnBack1}
                    start={[0, 0]}
                    end={[1, 0]}
                >
                </LinearGradient >
                <LinearGradient
                    colors={['#232526', '#414345']}
                    style={styles.btnBack2}
                    start={[0, 0]}
                    end={[1, 0]}
                >
                </LinearGradient >
                <MenuButton />
                <ReservationButton />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerZone: {
        zIndex: 9,
        width: WIDTH,
        height: 80,
        top: 44,
        left: 0,
        position: 'absolute',
    },
    btnBack1: {
        width: 45,
        height: 45,
        top: -5,
        left: 14,
        borderRadius: 25,
        opacity: 0.85,
    },
    btnBack2: {
        width: 45,
        height: 45,
        borderRadius: 25,
        top: -5,
        right: 14,
        position: 'absolute',
        opacity: 0.85,
    }
});

export default withNavigation(MapHeader);