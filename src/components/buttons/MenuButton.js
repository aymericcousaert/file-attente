import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import config from '../../config'
import { withNavigation } from 'react-navigation';

class MenuButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.menuZone} onPress={() => this.props.navigation.toggleDrawer()}>
                <Image style={styles.menuIcon} source={config.icons.menuIcon} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    menuZone: {
        zIndex: 9,
        position: 'absolute',
        top: 3,
        left: 3,
    },
    menuIcon: {
        width: 28,
        height: 28,
        marginLeft: 20,
        tintColor: config.colors.secondaryColor,
    }
});

export default withNavigation(MenuButton);