import React from 'react'
import {StyleSheet, View} from 'react-native'

class FileAttente extends React.Component {

    render() {
        return (
            <View style={styles.main_container}/>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height:100,
        width:300,
        borderWidth:2,
        marginVertical:2
    }
})

export default FileAttente
