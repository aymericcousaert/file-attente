import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import config from './../config';
import * as firebase from 'firebase';

const WIDHT = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class CustomSideBar extends Component {
    logOut() {
        firebase.auth().signOut().then(function () {
            this.props.navigation.navigate(nav)
        }).catch(function (error) {
            // An error happened.
        });
    }

    navLink(nav, text) {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate(nav)} >
                <Text style={styles.menuText}>{text}</Text>
            </ TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{ opacity: 0.8, backgroundColor: '#19342F' }}>
                <View style={styles.topLinks}>
                </View>
                <View style={{ top: 30, height: 700, }}>
                    {this.navLink('Feed', 'Home')}
                    {this.navLink('Map', 'Map')}
                    {this.navLink('CreateEmpPage', 'Create your shop page ?')}
                    {this.navLink('Settings', 'Settings')}
                    <TouchableOpacity onPress={() => this.logOut()} >
                        <Text style={styles.menuText}>Logout</Text>
                    </ TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    topLinks: {
        height: 270,
        backgroundColor: config.colors.mainColor,
        borderBottomColor: config.colors.borderColor,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    menuText: {
        fontSize: 19,
        margin: 8,
        paddingHorizontal: 12,
        color: 'rgba(255,255,255,0.7)',
        fontWeight: 'bold'
    }
})