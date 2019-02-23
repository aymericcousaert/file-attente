import React from 'react';
import Image from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Feed from './Feed';
import { Map } from '../screens';
import config from '../config'

const MainPageTab = createBottomTabNavigator(
    {
        Feed: { screen: Feed },
        Map: { screen: Map },
    },
)


export default createAppContainer(MainPageTab);