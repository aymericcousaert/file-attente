import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { Map } from '../screens';
import CustomSideBar from './../components/CustomSideBar';
import MainPageStack from './MainPageStack';
import Feed from './Feed';
import Begin from './Begin';

const WIDTH = Dimensions.get('window').width;

const SideBarConfig = {
    SideBarWidth: WIDTH * 0.68,
    gestureEnabled: false,
    contentComponent: ({ navigation }) => {
        return (<CustomSideBar navigation={navigation} />)
    }
}

const SideBar = createDrawerNavigator(
    {
        Home: {
            screen: MainPageStack
        },
        Feed: {
            screen: Feed,
        },
        Map: {
            screen: Map
        },
        Logout: {
            screen: Begin,
        }
    },
    SideBarConfig,
);

export default createAppContainer(SideBar);