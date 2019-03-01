import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native'

class Queue extends React.Component {

    _displayQueue() {
        return (
            <TouchableOpacity style={styles.main_container} onPress={() => this.props.displayQueueDetails()}>
                <Text style={styles.text}>File d'attente {this.props.num.id}</Text>
            </TouchableOpacity>
        )
    }

    _displayQueueLast() {
        return (
            <TouchableOpacity style={styles.main_container} onPress={() => this.props.displayQueueDetails()}>
                <Text style={styles.text}>Je suis le dernier</Text>
            </TouchableOpacity>
        )
    }

    render() {
        if(this.props.isTheLast) {
            return (
                <TouchableOpacity style={styles.main_container} onPress={() => this.props.displayQueueDetails()}>
                    <Text style={styles.text}>Je suis le dernier</Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity style={styles.main_container} onPress={() => this.props.displayQueueDetails()}>
                    <Text style={styles.text}>File d'attente {this.props.num.id}</Text>
                </TouchableOpacity>
            )
        }
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:100,
        width:300,
        marginVertical:10,
        backgroundColor:'blue'
    },
    text: {
        color:'white',
        fontSize:16,
        fontWeight:'bold'
    }
})

export default Queue
