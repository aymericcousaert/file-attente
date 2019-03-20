import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native'

class Queue extends React.Component {

    render() {
        const {num,displayQueueDetails} = this.props
        return (
            <TouchableOpacity style={styles.main_container} onPress={() => displayQueueDetails()}>
                <Text style={styles.text}>Queue n°{num.key}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        justifyContent:'center',
        alignItems:'center',
        height:100,
        width:300,
        marginVertical:10,
        backgroundColor:'#19D127'
    },
    text: {
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }
})

export default Queue
