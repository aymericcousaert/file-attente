import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
    email: t.String,
    username: t.String,
    password: t.String,
    terms: t.Boolean
});

export default class FormInscription extends Component {
    render() {
        return (
            <View style={styles.boxForm.Form}>
                <Form type={User} /> {/* Notice the addition of the Form component */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    boxForm: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
});
