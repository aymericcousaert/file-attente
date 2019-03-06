import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import config from '../../config'
import { withNavigation } from 'react-navigation';

class ValidateEmpButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.buttonPlace} onPress={() => this.props.navigation.navigate('FormInscription')}>
                <Image style={styles.buttonIcon} source={config.icons.validateIcon} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonPlace: {
        position: 'absolute',
        bottom: 80,
        right: 50,
    },
    buttonIcon: {
        width: 80,
        height: 80,
        marginLeft: 20,
        tintColor: config.colors.green,
    }
});

export default withNavigation(ValidateEmpButton);