import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  AlertIOS
} from 'react-native';

export default class FirstTabScreen extends Component {
	
	constructor(props) {
    	super(props);

    	this.props.navigator.setOnNavigatorEvent(function(event) {
		  console.log(event);

		  if(event.id == "bottomTabSelected" && event.selectedTabIndex==2) {
		  	
		  	this.props.navigator.switchToTab({
			  tabIndex: 0 
			});

		  	this.openModal();

		  	
		  }

		}.bind(this));

	}

	openModal() {
       this.props.navigator.showModal({
         screen: 'example.ActionInfo',
         title: "New Unifyre",
         passProps: {},
         navigatorButtons: {
         	rightButtons: [
		      {
		        title: 'Close', 
		        id: 'Close', 
		      }
		  	]
		  },
         
         animationType: 'slide-up'
       });
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