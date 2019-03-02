/**************************************
Class MainPageStack :

***************************************/

import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { MenuButton, BackButton, ReservationButton } from './../components';
import { Reservations, Settings, EmpPage } from './../screens'
import MainPageTab from './MainPageTab';
import CreateEmpPageNav from './CreateEmpPageNav';
import config from '../config'

const MainPageStack = createStackNavigator(
    {
        MainPageTab: {
            screen: MainPageTab,
            navigationOptions: {
                headerLeft: <MenuButton />,
                headerRight: <ReservationButton />,
                headerTitle: 'APP NAME'
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
        CreateEmpPage: {
            screen: CreateEmpPageNav,
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
                headerStyle: {
                    backgroundColor: config.colors.mainColor
                },
                headerTitleStyle: {
                    fontSize: 18,
                    lineHeight: 23,
                    fontWeight: "bold",
                    color: config.colors.secondaryColor,
                },
            }
        }
    })


export default createAppContainer(MainPageStack);
