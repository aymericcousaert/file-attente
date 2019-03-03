/**************************************
Class Feed :

***************************************/

import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Home } from './../screens'

const Feed = createStackNavigator(
    {
        TileList: {
            screen: Home,
        },
    },
    {
        headerMode: 'none',
        defaultNavigationOptions: {
            gesturesEnabled: false,
        },
    }
)

export default createAppContainer(Feed);
