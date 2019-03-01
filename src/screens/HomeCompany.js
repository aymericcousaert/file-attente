import React from 'react'
import {StyleSheet, View, FlatList} from 'react-native'
import Queue from '../components/Queue'

class HomeCompany extends React.Component {

    _displayQueueDetails = () => {
        this.props.navigation.navigate('QueueDetails')
    }

    render() {
        return (
            <View style={styles.main_container}>
                <FlatList
                    style={styles.flat_list}
                    data={[{key:'a',id:'1'},{key:'b',id:'2'},{key:'c',id:'3'}]}
                    renderItem={({item}) => <Queue num={item} isTheLast={(item.id > 2) ? true : false} displayQueueDetails={this._displayQueueDetails}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    flat_list: {
        flex:1
    }
})

export default HomeCompany
