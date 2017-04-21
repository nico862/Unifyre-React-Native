import React, { PureComponent } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet, 
  TextInput,
} from 'react-native';  
import LinearGradient from 'react-native-linear-gradient';
import Button from '../components/common/Button';

class ModalScreen extends PureComponent {
 
  componentWillMount() {
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = (event) => {
    switch (event.id) {
      case 'bottomTabSelected':
        if(event.selectedTabIndex == 2) {
          this.openModal();

          this.props.navigator.switchToTab({
            tabIndex: event.unselectedTabIndex
          });
        }
        break;

      default:
        console.log('PushedScreen', 'Unknown event ' + event.id);
    }
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
    return null;
  }
}
 
export default (ModalScreen);

