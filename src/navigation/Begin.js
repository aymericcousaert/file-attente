import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Login } from './../screens';

const Begin = createSwitchNavigator({
    Login: { screen: Login },
})

export default createAppContainer(Begin);