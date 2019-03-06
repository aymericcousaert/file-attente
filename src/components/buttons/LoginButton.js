import React, { Component } from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class LoginButton extends Component {
    render() {
        return (
            <Button title="Login" onPress={() => this.props.navigation.navigate('Home')} />
        )
    }
}

export default withNavigation(LoginButton);