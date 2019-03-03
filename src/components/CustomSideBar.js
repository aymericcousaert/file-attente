import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native';
import config from './../config';
import LinearGradient from 'expo';
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
            <View style={{ opacity: 0.8 }}>
                <View style={styles.topLinks}>
                </View>
                <View style={{ top: 30, height: 700, backgroundColor: 'transparent' }}>
                    {this.navLink('Feed', 'Home')}
                    {this.navLink('Map', 'Map')}
                    {this.navLink('CreateEmpPage', 'Join us !')}
                    {this.navLink('Settings', 'Settings')}
                    <TouchableOpacity onPress={() => this.logOut()} >
                        <Text style={styles.menuText}>Logout</Text>
                    </ TouchableOpacity>
                    <Text style={styles.menuText}>OUI C'EST TJ MOCHE desoo :* </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    topLinks: {
        height: 270,
        backgroundColor: 'transparent',
    },
    menuText: {
        fontSize: 19,
        margin: 8,
        paddingHorizontal: 12,
        color: 'rgba(255,255,255,0.7)',
        fontWeight: 'bold'
    }
})