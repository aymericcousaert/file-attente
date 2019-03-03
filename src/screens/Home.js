/**************************************
Screen Home :

***************************************/
import React, { Component } from 'react';
import { View, Image, Text, TextInput, Platform, StatusBar } from 'react-native';
import { TileList, LittleTileList } from './../container';
import BottomTabBar from './../components/BottomTabBar';
import config from './../config';


class Home extends Component {

    render() {
        return (
            <View style={config.styles.grandFond}>
                <View style={{ top: 10, marginBottom: 10, flexDirection: 'row', padding: 10, backgroundColor: 'white', marginHorizontal: 20, shadowOffSet: { width: 2, height: 2 }, shadowColor: 'black', shadowOpacity: 0.2, elevation: 1, borderRadius: 25, }}>
                    <Image source={config.icons.searchIcon} style={{ marginRight: 10, height: 16, width: 16, opacity: 0.7 }} />
                    <TextInput
                        underlineColorAndroid='transparent'
                        placeholder="Try Lyon"
                        placeholderTextColor="grey"
                        style={{
                            flex: 1, fontWeight: '700', backgroundColor: 'white'
                        }}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: 'space-around' }}>
                    <View>
                        <Text style={{ paddingHorizontal: 20, marginTop: 10, marginBottom: 10, fontWeight: '700', fontSize: 25 }}>Sugestions for you :</Text>
                        <LittleTileList navigation={this.props.navigation} />
                    </View>
                    <Text style={{ paddingHorizontal: 20, marginBottom: 10, fontWeight: '700', fontSize: 25 }}>Close to your position :</Text>
                    <TileList navigation={this.props.navigation} />
                </View>
                <BottomTabBar />
            </View >

        )
    }
}

export default Home
