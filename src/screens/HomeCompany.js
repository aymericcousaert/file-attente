import React from 'react'
import {StyleSheet, View, TouchableOpacity, Image, FlatList, Text} from 'react-native'
import Queue from '../components/Queue'

class HomeCompany extends React.Component {

    _displayQueueDetails = () => {
        this.props.navigation.navigate('QueueDetails')
    }

    _displayQueueSettings() {
        this.props.navigation.navigate('QueueSettings')
    }

    _displayCompanySettings() {
        this.props.navigation.navigate('CompanySettings')
    }

    render() {
        return (
            <View style={styles.main_container}>
                <TouchableOpacity style={styles.settings_touchableOpacity} onPress={() => this._displayCompanySettings()}>
                    <Image style={styles.settings_image} source={require('../icon/settings.png')}/>
                </TouchableOpacity>
                <View style={styles.flatlist_container}>
                    <FlatList
                        style={styles.flat_list}
                        showsVerticalScrollIndicator={false}
                        data={[{key:'1'},{key:'2'},{key:'3'}]}
                        renderItem={({item}) =>
                            <Queue
                                num={item}
                                displayQueueDetails={this._displayQueueDetails}
                            />
                        }
                    />
                </View>
                <TouchableOpacity style={styles.add_queue_touchableOpacity} onPress={() => this._displayQueueSettings()}>
                    <Text style={styles.add_queue_text}>+</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex:1
    },
    flatlist_container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    settings_touchableOpacity: {
        height:50,
        width:50
    },
    settings_image: {
        height:50,
        width:50
    },
    flat_list: {
        flex:1
    },
    add_queue_touchableOpacity: {
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        width:60,
        height:60,
        right:30,
        bottom:30,
        borderRadius:30,
        backgroundColor:'#0064FF',
    },
    add_queue_text: {
        color:'white',
        fontSize:26,
        fontWeight:'bold'
    }
})

export default HomeCompany
