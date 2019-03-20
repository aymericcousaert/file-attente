import React from 'react'
import {StyleSheet, View, Text, Button, Alert} from 'react-native'

class QueueDetails extends React.Component {

    _onPressButton = () => {
        Alert.alert('COUCOU')
    }

    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.button_container}>
                    <Button onPress={this._onPressButton} title="..."/>
                </View>
                <Text> Lundi </Text>
                <Text> Mardi </Text>
                <Text> Mercredi </Text>
                <Text> Jeudi </Text>
                <Text> Vendredi </Text>
                <Text> Samedi </Text>
                <Text> Dimanche </Text>
                <Button onPress={this._onPressButton} title="Ajouter Créneau"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex:1,
        justifyContent:'space-around',
        alignItems:'center'
    },
    button_container: {
        position:'absolute',
        right:30,
        top:30
    }
})

export default QueueDetails
