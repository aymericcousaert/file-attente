import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../styles/colors';

export default class RoundedButton extends Component {
    render() {
        const { text, textColor, background, icon, handleOnPress } = this.props;
        const backgroundColor = background || 'transparent';
        const color = textColor || colors.black;
        return (
            <TouchableOpacity
                style={[styles.container, { backgroundColor }]}
                onPress={handleOnPress}
            >
                <View style={styles.buttonTextContainer}>
                    {icon}
                    <Text style={[styles.buttonText, { color }]}>{text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

RoundedButton.PropTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    icon: PropTypes.object,
    handleOnPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 15,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'transparent',
        marginBottom: 15,
        opacity: 0.9
    },
    buttonText: {
        fontSize: 17,
        fontWeight: '500',
        width: '100%',
        textAlign: 'center',
    },
    buttonTextContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})