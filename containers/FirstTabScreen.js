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

	openModal() {
       this.props.navigator.showModal({
         screen: "unifyre.NewUnifyreScreen", 
         title: "New Unifyre",
         passProps: {},
         navigatorStyle: {},
         animationType: 'slide-up'
       });
	}

   render() {
     return (
       <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
         <TouchableOpacity onPress={() => {this.pushView()}}>
           <Text>Test</Text>
         </TouchableOpacity>
         
         <View
           style={{
             position: 'absolute',
             right: 0,
             left: 0,
             bottom: 0,
             marginBottom: -40,
             alignItems: 'center',
             zIndex: 1000,
           }}
         >
         <TouchableOpacity
           onPress={() => {this.openModal()}}
           style={{
             padding: 2,
             backgroundColor: 'red',
             borderRadius: 20,
             height: 40,
             width: 40,
           }}
         >
           <View/>
         </TouchableOpacity>
         </View>
       </View>
     );
   }
}