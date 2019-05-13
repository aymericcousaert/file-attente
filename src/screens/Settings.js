/**************************************
Screen Settings :

***************************************/

import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import RoundedButton from './../components/buttons/RoundedButton';
import colors from './../styles/colors';

export default class Settings extends Component {


	toCreateShop = () => {

	}

    render() {
        return (
					<View style={{ flex: 1 }} >
						<View style={{ position: 'absolute', bottom: 30, paddingLeft: 40, }}>
								<RoundedButton
										text="Work with us"
										textColor={colors.darkBlue}
										background={colors.white}
										icon={<Image style={styles.icon} source={require('./../icon/deal.png')} />}
										handleOnPress={this.toCreateShop}
								/>
						</View>
					</View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
        position: 'relative',
        left: 25,
        alignItems: 'center',
        tintColor: colors.darkBlue,
			},
});
