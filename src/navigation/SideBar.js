/**************************************
Class SideBar :

***************************************/

import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { Map } from '../screens';
import CustomSideBar from './../components/CustomSideBar';
import MainPageStack from './MainPageStack';
import Feed from './Feed';

const WIDTH = Dimensions.get('window').width;

const SideBarConfig = {
    SideBarWidth: WIDTH * 0.68,
    gestureEnabled: false,
    drawerBackgroundColor: "transparent",
    contentComponent: ({ navigation }) => {
        return (<CustomSideBar navigation={navigation} />)
    }
}
/**************************************
Creates a Drawer navigation where the user
is prompted with different screens
***************************************/
const SideBar = createDrawerNavigator(
    {
        Home: {
            screen: MainPageStack
        },
        Map: {
            screen: Map,
            header: null
        },
    },
    SideBarConfig,
);

export default createAppContainer(SideBar);
