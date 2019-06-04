/**************************************
Class MainPageStack :

***************************************/

import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Settings from '../screens/Settings';
import AuthStackNavigator from './AuthStackNavigator';

// headerLeft: <BackButton />,
/*navigationOptions: {
    headerTitle: 'QueueDetails'
}*/

const Setting = createStackNavigator(
    {
        Settings: {
            screen: Settings,
        },
        AuthStackNavigator: {
            screen: AuthStackNavigator,
        },
    },
    {
        headerMode: 'none',
    }
)

export default createAppContainer(Setting)
