import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

class CompanySettings extends React.Component {

    render() {
        return (
            <View style={styles.main_container}>
                <Text>CompanySettings Screen</Text>
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

export default CompanySettings
