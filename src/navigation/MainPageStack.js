/**************************************
Class MainPageStack :

***************************************/

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { LinearGradient } from 'expo';
import { MenuButton, BackButton, ReservationButton } from './../components';
import { Reservations, Settings, EmpPage, Map } from './../screens'
import Feed from './Feed';
import config from '../config'

const navOption =
    ({ navigation }) => {
        return {
            headerLeft: <BackButton />,
            headerTitle: 'Settings',
            headerTintColor: config.colors.secondaryColor,
            headerStyle: {
                backgroundColor: config.colors.mainColor
            },
            headerTitleStyle: {
                fontSize: 18,
                lineHeight: 23,
                fontWeight: "bold",
                color: config.colors.secondaryColor,
            },
            headerBackground: (
                <LinearGradient
                    colors={[config.colors.rose, config.colors.orange]}
                    style={{ flex: 1 }}
                    start={[0, 0]}
                    end={[1, 0]}
                />
            ),
            headerStyle: {
                backgroundColor: 'transparent',
            }
        }
    }

const MainPageStack = createStackNavigator(
    {
        Feed: {
            screen: Feed,
            navigationOptions: {
                headerLeft: <MenuButton />,
                headerRight: <ReservationButton />,
                headerTitle: 'Fast Passs',
                navOption,
            }
        },
        Reservations: {
            screen: Reservations,
            navigationOptions: {
                headerTitle: 'Bookings'
            }
        },
        EmpPage: {
            screen: EmpPage,
            navigationOptions: {
                headerTitle: 'Nom Emp'
            }
        },
        Settings: {
            screen: Settings,
            navigationOptions: {
                headerTitle: 'Settings'
            }
        },

    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: <BackButton />,
                headerTitle: 'Settings',
                headerTintColor: config.colors.secondaryColor,
                headerTitleStyle: {
                    fontSize: 18,
                    lineHeight: 23,
                    fontWeight: "bold",
                    color: config.colors.secondaryColor,
                },
                headerBackground: (
                    <LinearGradient
                        colors={['#232526', '#414345']}
                        style={{ flex: 1 }}
                        start={[0, 0]}
                        end={[1, 0]}
                    />
                ),
                headerStyle: {
                    backgroundColor: 'transparent',
                }
            }
        }
    })
export default createAppContainer(MainPageStack);