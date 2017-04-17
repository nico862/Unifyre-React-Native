import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform
} from 'react-native';

export default class FirstTabScreen extends Component {
	
	constructor(props) {
    	super(props);
	}

	pushView() {
		this.props.navigator.push({
			screen: 'example.ActionInfo',
			title: '',
			navigatorStyle: {
				navBarHidden: true,
				disabledBackGesture: false,
				statusBarTextColorSchemeSingleScreen: "light",
				tabBarHidden: true
			}
		});
	}

	render() {
    	return (
    		<View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
    			<TouchableOpacity onPress={() => {this.pushView()}}>
    				<Text>Test</Text>
    			</TouchableOpacity>
    		</View>
    	);
    }
}