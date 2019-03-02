import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import config from '../config';
import { withNavigation } from 'react-navigation';

class BackButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.menuZone} onPress={() => this.props.navigation.goBack()}>
                <Image style={styles.menuIcon} source={config.icons.backArrowIcon} />
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
        width: 19,
        height: 19,
        marginLeft: 9,
        marginTop: 9,
        tintColor: config.colors.secondaryColor,
    }
});

export default withNavigation(BackButton);
