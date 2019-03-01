/**************************************
Class MainPageTab :

***************************************/

import React from 'react';
import Image from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Feed from './Feed';
import { Map } from '../screens';
import config from '../config'

const MainPageTab = createBottomTabNavigator(
    {
        Feed: {
            screen: Feed,
        },
        Map: {
            screen: Map,
        },
    },
    {
        tabBarPosition: "bottom",
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'tomato',
            showLabel: true,
            showIcon: true,

        }
    }
)

export default createAppContainer(MainPageTab);
