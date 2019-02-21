/**************************************
Class App :

***************************************/
import React from 'react'
import {createAppContainer} from 'react-navigation'
import AppNavigator from './Screens/AppNavigator'

export default class App extends React.Component {
  render() {
    return (
      <AppScreens/>
    )
  }
}

const AppScreens = createAppContainer(AppNavigator);
