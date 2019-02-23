/**************************************
Class Feed :

***************************************/

import { createStackNavigator, createAppContainer } from 'react-navigation';
import { TileList } from './../container'

const Feed = createStackNavigator(
    {
        TileList: {
            screen: TileList,
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
