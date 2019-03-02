import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

class QueueSettings extends React.Component {

    render() {
        return (
            <View style={styles.main_container}>
                <Text>QueueSettings Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default QueueSettings
