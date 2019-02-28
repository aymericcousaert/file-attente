import React from 'react'
import {StyleSheet, View, FlatList} from 'react-native'
import FileAttente from '../components/FileAttente'

class HomeCompany extends React.Component {

    render() {
        return (
            <View style={styles.main_container}>
                <FlatList
                    style={styles.flat_list}
                    data={[{key:'a'},{key:'b'}]}
                    renderItem={({item}) => <FileAttente/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex:1,
        alignItems:'center',
    },
    flat_list: {
        flex:1
    }
})

export default HomeCompany
