import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import config from './../config'

const WIDHT = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class CustomSideBar extends Component {

    navLink(nav, text) {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate(nav)} >
                <Text style={styles.menuText}>{text}</Text>
            </ TouchableOpacity>
        )
    }

    render() {
        return (
            <View>
                <View style={styles.topLinks}>
                </View>
                <View style={{ top: 30 }}>
                    {this.navLink('Feed', 'Home')}
                    {this.navLink('Map', 'Map')}
                    {this.navLink('CreateEmpPage', 'Create your shop page ?')}
                    {this.navLink('Settings', 'Settings')}
                    {this.navLink('LogIn', 'Logout')}
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
        fontSize: 13,
        margin: 8,
        color: 'black',
        fontWeight: 'bold'
    }
})