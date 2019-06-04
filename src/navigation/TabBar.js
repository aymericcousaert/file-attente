
import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Map } from '../screens';
import MainPageStack from './MainPageStack';
import Setting from './Setting';
import Reservations from './../screens/Reservations';
import BottomTabBar from './../components/BottomTabBar';
import Icon from './../components/Icon';

const TabBar = createBottomTabNavigator(
    {
        Home: {
            screen: MainPageStack,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <Icon name="home" color={tintColor} />
            }
        },
        Map: {
            screen: Map,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <Icon name="map" color={tintColor} />
            }
        },
        Booking: {
            screen: Reservations,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <Icon name="booking" color={tintColor} />
            }
        },
        Setting: {
            screen: Setting,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <Icon name="settings" color={tintColor} />
            }
        }
    },
    {
        tabBarComponent: BottomTabBar,
        tabBarOptions: {
            activeTintColor: "rgba(73,175,235,0.9)",
            inactiveTintColor: "#ddd",
        }
    }
);

export default createAppContainer(TabBar);
