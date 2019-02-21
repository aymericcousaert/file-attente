/**************************************
Component AuthenticationButtons :

***************************************/

import React from 'react';
import{ StyleSheet,Text,TouchableOpacity } from 'react-native';

const AuthenticationButtons = ({onPress, children}) => {
	return(
		<TouchableOpacity onPress={onPress} style={styles.authButton}}>
			<Text style = {styles.authText}>{children}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
		authButton: {
			marginTop: 10,
			padding: 20,
			width: '100%',
			backgroundColor: '#00aeef',
			borderRadius: 4,
			alignItems: 'center'
		},
		authText: {
				color: 'white',
				fontWeight: '700',
				fontSize: 10
		}
});

export AuthenticationButtons;
