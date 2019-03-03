import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import config from './../config'
import { withNavigation } from 'react-navigation';
import { LinearGradient } from 'expo';
import { ViewPagerAndroid } from 'react-native-gesture-handler';

const { width: WIDTH } = Dimensions.get('window');

class BottomTabBar extends Component {
    render() {
        return (
            <LinearGradient
                colors={[config.colors.rose, config.colors.orange]}
                style={styles.tabBarContainer}
                start={[0, 0]}
                end={[1, 0]}

            >
                <TouchableOpacity style={styles.menuZone} onPress={() => this.props.navigation.navigate('Feed')}>


                    <Image style={styles.homeStyle} source={config.icons.homeIcon} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuZone} onPress={() => this.props.navigation.navigate('Map')}>
                    <Image style={styles.mapStyle} source={config.icons.mapIcon} />
                </TouchableOpacity>

            </LinearGradient >
        )
    }
}

const styles = StyleSheet.create({
    tabBarContainer: {
        width: WIDTH / 3,
        height: 45,
        backgroundColor: 'transparent',
        position: 'absolute',
        left: WIDTH / 3,
        bottom: 36,
        borderRadius: 25,
        opacity: 0.9,
        borderColor: config.colors.borderColor,
        borderWidth: StyleSheet.hairlineWidth,
    },
    homeZone: {
        width: 50,
        height: 50,
        zIndex: 8,
        borderRadius: 25,
        position: 'absolute',
        bottom: 36,
        left: WIDTH / 3,
    },
    homeStyle: {
        width: 25,
        height: 25,
        tintColor: config.colors.secondaryColor,
        left: WIDTH / 3 / 7,
        top: 50 / 6,
        position: 'absolute',
    },
    mapStyle: {
        width: 24,
        height: 24,
        tintColor: config.colors.secondaryColor,
        right: WIDTH / 3 / 7 + 0.5,
        top: 50 / 6 + 0.5,
        position: 'absolute',
    },
});

export default withNavigation(BottomTabBar);