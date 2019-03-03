/**************************************
Emploi du Temps :

***************************************/
import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import config from './../config';

class QueueDetails extends Component {

  _onPressButton = () => {
    alert('COUCOU')
  }

    render() {
        return (

            <View style={{flex :1,flexDirection : 'column', justifyContent: 'space-around', alignItems: "center"}}>
            <View style={{position:'absolute',right:30,top:30}}>
            <Button
              onPress={this._onPressButton}
              title="..."
              />
            </View>
                  <Text> Lundi </Text>
                  <Text> Mardi </Text>
                  <Text> Mercredi </Text>
                  <Text> Jeudi </Text>
                  <Text> Vendredi </Text>
                  <Text> Samedi </Text>
                  <Text> Dimanche </Text>
                  <Button
                    onPress={this._onPressButton}
                    title="Ajouter Créneau"
                    />
            </View >
        )
    }
}

export default QueueDetails
