import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { LoginButton } from './../components';

class Login extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <LoginButton />
                <Button title="Sign Up" onPress={() => alert('ca fait rien mdr')} />
            </View>
        );
    }
}

export default Login