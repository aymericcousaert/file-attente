import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Text, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView} from 'react-native'

export default class CompanySettings extends Component {

    _displayHomeCompany() {
        this.props.navigation.navigate('HomeCompany')
    }

    render() {
        return (
            <ImageBackground style={styles.background_container} source={require('../image/BackImageCompany.png')}>
                <KeyboardAvoidingView style={styles.keyboard_container} behavior="padding">
                    <ScrollView style={styles.main_container} showsVerticalScrollIndicator={false}>
                        <Text style={styles.text}>Manager's name :</Text>
                        <TextInput style={styles.text_input} placeholder="SMITH John" placeholderTextColor='rgba(255, 255, 255, 0.5)'/>
                        <Text style={styles.text}>Name of the company :</Text>
                        <TextInput style={styles.text_input} placeholder="Starbucks" placeholderTextColor='rgba(255, 255, 255, 0.5)'/>
                        <Text style={styles.text}>Number and street name :</Text>
                        <TextInput style={styles.text_input} placeholder="20 Avenue Albert Einstein" placeholderTextColor='rgba(255, 255, 255, 0.5)'/>
                        <Text style={styles.text}>Postal code :</Text>
                        <TextInput style={styles.text_input} placeholder="69100" placeholderTextColor='rgba(255, 255, 255, 0.5)'/>
                        <Text style={styles.text}>City :</Text>
                        <TextInput style={styles.text_input} placeholder="Villeurbanne" placeholderTextColor='rgba(255, 255, 255, 0.5)'/>
                        <Text style={styles.text}>Country :</Text>
                        <TextInput style={styles.text_input} placeholder="FRANCE" placeholderTextColor='rgba(255, 255, 255, 0.5)'/>
                        <View style={styles.touchableOpacity_container}>
                            <TouchableOpacity style={styles.touchableOpacity} onPress={() => this._displayHomeCompany()}>
                                <Text style={styles.touchableOpacity_text}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background_container: {
        flex:1,
        width:null,
        height:null,
    },
    main_container: {
        flex:1
    },
    keyboard_container: {
        flex:1
    },
    touchableOpacity_container: {
        flex:1,
        alignItems:'center'
    },
    text: {
        marginTop:10,
        paddingLeft:10,
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    },
    text_input: {
        marginTop:10,
        marginHorizontal:20,
        height:40,
        borderRadius:25,
        paddingLeft:10,
        backgroundColor:'rgba(0, 0, 0, 0.35)',
        color:'white'
    },
    touchableOpacity: {
        marginVertical:40,
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width:150,
        backgroundColor:'#19D127'
    },
    touchableOpacity_text: {
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }
})
