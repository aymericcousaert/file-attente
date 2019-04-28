/**************************************
Class Feed :

***************************************/

import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Home } from './../screens'

const Feed = createStackNavigator(
    {
        Feed: {
            screen: Home,
            headerMode: 'none',
        },
    },
)

export default createAppContainer(Feed);
