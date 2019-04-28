/**************************************
Class MainPageStack :

***************************************/

import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import EmpPage from './../screens/EmpPage';
import QueueDetails from './../screens/QueueDetails';
import Home from './../screens/Home';

// headerLeft: <BackButton />,
/*navigationOptions: {
    headerTitle: 'QueueDetails'
}*/

const MainPageStack = createStackNavigator(
    {
        Home: {
            screen: Home,
        },
        EmpPage: {
            screen: EmpPage,
        },
        QueueDetails: {
            screen: QueueDetails,
        },
    },
    {
        headerMode: 'none',
    }
)

export default createAppContainer(MainPageStack)
