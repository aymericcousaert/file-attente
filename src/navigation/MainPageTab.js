/**************************************
Class MainPageTab :

***************************************/

import React from 'react';
import Image from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import LinearGradient from 'expo';
import Feed from './Feed';
import { Map } from '../screens';
import config from '../config'

const MainPageTab = createBottomTabNavigator(
    {
        Feed: {
            screen: Feed,
            tabBaricon: ({ tintColor }) => (
                <Image source={config.icons.menuIcon}
                    style={{
                        tintColor: tintColor,
                        width: 30,
                        height: 30,
                    }} />
            )
        },
        Map: {
            screen: Map,
        },
    },
    {
        tabBarPosition: "bottom",
        tabBarOptions: {
            activeTintColor: config.colors.roseOpacityON,
            inactiveTintColor: config.colors.orangeOpacityON,
            showLabel: true,
            showIcon: true,

        }
    }
)

export default createAppContainer(MainPageTab);
