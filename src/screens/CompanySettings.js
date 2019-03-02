import React from 'react'
import {StyleSheet, View, ScrollView, Text, TextInput, TouchableOpacity} from 'react-native'

class CompanySettings extends React.Component {

    _displayHomeCompany() {
        this.props.navigation.navigate('HomeCompany')
    }

    render() {
        return (
            <ScrollView style={styles.main_container} showsVerticalScrollIndicator={false}>
                <View style={styles.form_container}>
                    <Text style={styles.text}>Nom du gérant / de la gérante :</Text>
                    <TextInput style={styles.text_input} placeholder="DUPONT Martin"/>
                    <Text style={styles.text}>Nom de l'enseigne :</Text>
                    <TextInput style={styles.text_input} placeholder="Carrefour"/>
                    <Text style={styles.text}>Numéro et nom de rue :</Text>
                    <TextInput style={styles.text_input} placeholder="20 Avenue Albert Einstein"/>
                    <Text style={styles.text}>Code postal :</Text>
                    <TextInput style={styles.text_input} placeholder="69100"/>
                    <Text style={styles.text}>Ville :</Text>
                    <TextInput style={styles.text_input} placeholder="Villeurbanne"/>
                </View>
                <View style={styles.touchableOpacity_container}>
                    <TouchableOpacity style={styles.touchableOpacity} onPress={() => this._displayHomeCompany()}>
                        <Text style={styles.touchableOpacity_text}>Confirmer</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex:1
    },
    form_container: {
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
        fontWeight:'bold'
    },
    text_input: {
        marginTop:10,
        marginHorizontal:10,
        paddingLeft:10,
        borderWidth:2
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

export default CompanySettings
