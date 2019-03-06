import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import config from '../../config'
import { withNavigation } from 'react-navigation';

class ReservationButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.menuZone} onPress={() => this.props.navigation.navigate('Reservations')}>
                <Image style={styles.menuIcon} source={config.icons.reservationIcon} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    menuZone: {
        zIndex: 9,
        position: 'absolute',
        top: 0,
        right: 24,
    },
    menuIcon: {
        width: 26,
        height: 26,
        marginLeft: 0,
        marginTop: 4,
        tintColor: config.colors.secondaryColor,
    }
});

export default withNavigation(ReservationButton);