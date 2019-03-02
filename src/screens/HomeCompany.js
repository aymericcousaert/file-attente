import React from 'react'
import {StyleSheet, View, TouchableOpacity, Image, FlatList} from 'react-native'
import Queue from '../components/Queue'

class HomeCompany extends React.Component {

    _displayQueueDetails = () => {
        this.props.navigation.navigate('QueueDetails')
    }

    _displayQueueSettings = () => {
        this.props.navigation.navigate('QueueSettings')
    }

    _displayCompanySettings() {
        this.props.navigation.navigate('CompanySettings')
    }

    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.settings_container}>
                    <TouchableOpacity style={styles.settings_touchableOpacity} onPress={() => this._displayCompanySettings()}>
                        <Image style={styles.settings_image} source={require('../icon/settings.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.flatlist_container}>
                    <FlatList
                        style={styles.flat_list}
                        showsVerticalScrollIndicator={false}
                        data={[{key:'1'},{key:'2'},{key:'3'}]}
                        renderItem={({item}) =>
                            <Queue
                                num={item}
                                isTheLast={(item.key > 2) ? true : false}
                                displayQueueDetails={this._displayQueueDetails}
                                displayQueueSettings={this._displayQueueSettings}
                            />
                        }
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex:1
    },
    settings_container: {
        height:50
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
    }
})

export default HomeCompany
