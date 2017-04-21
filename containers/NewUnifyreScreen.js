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

class NewUnifyreScreen extends PureComponent {

  

  static navigatorButtons = {
    leftButtons: [{
      icon: require('../images/x-icon.png'),
      
      color: 'black',
      id: 'close'
    }]
  };

  static navigatorStyle = {
    statusBarColor: 'white',
    navigationBarColor: 'white',
    navBarTextColor: '#000000',
    navBarTitleTextCentered: true, 
    statusBarTextColorSchemeSingleScreen: "light",
    orientation: 'portrait',
    tabBarHidden: true,
    navBarTitleFontSize: 20,
    tabBarButtonColor: 'black'
  };


  componentWillMount() {
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = (event) => {
    switch (event.id) {
      case 'close':
        this.props.navigator.dismissModal({
          animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
        });
        break;

      default:
        console.log('PushedScreen', 'Unknown event ' + event.id);
    }
  }



  
  render() {
    return (
      <LinearGradient 
        start={{x: 0, y:0}} end={{x: 0, y:1}}
        colors={['#ff9544', '#f12b73', '#682886']}
        style={styleViewScreen.mainContainer}
      > 
        <View 
          style={{
            height: 40,
            paddingHorizontal: 30,
            top: -10
          }}
        >
          <LinearGradient 
            start={{x: 0, y:0}} end={{x: 0, y:1}}
            colors={[
              'rgba(0,0,0,0.4)',
              'rgba(0,0,0,0.1)',
              'rgba(0,0,0,0.05)',
              'rgba(0,0,0,0.01)',
              'transparent'
            ]}
            style={{flex: 1, borderRadius: 10}}
          />
        </View>

        <View style={styleViewScreen.container}>
          <View style={styleViewScreen.message}>
            <Text style={styleViewScreen.textMessage}>
              A Unifyre is a critical mass of people pledging 
              to do an action and then following through on 
              that action.
            </Text>
          </View>
          <View style={styleViewScreen.form}>
            <View>
              <TextInput
                underlineColorAndroid={'transparent'}
                placeholderTextColor={'black'}
                placeholder={ 'Name' }
                style={styleViewScreen.textInput}
              />
              <View style={styleViewScreen.separator}/>
              <TextInput
                underlineColorAndroid={'transparent'}
                placeholderTextColor={'black'}
                placeholder={ 'Description' }
                style={styleViewScreen.textInput}
              /> 
              <View style={styleViewScreen.separator}/>
            </View> 
            <Button
              text={'Continue'}
            />
          </View>
        </View>
      </LinearGradient>
    );
  }
}
 
export default (NewUnifyreScreen);

const styleViewScreen = StyleSheet.create({  
  mainContainer: {
    flex: 1,
  }, 
  bar: {
    height: 50,
    backgroundColor: 'white', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black', 
    fontSize: 26, 
    fontWeight: 'bold', 
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    padding: 30,
  },
  message: {
    backgroundColor:'rgba(255,255,255,0.5)',
    padding: 15,
    borderRadius: 15
  },
  textMessage: {
    color: 'white', 
    fontSize: 15,
    textAlign: 'center',  
  },
  form: {
    height: 200,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    justifyContent: 'space-between',
  },
  textInput: {
    color: 'black', 
    fontSize: 12, 
    height: 40,
    backgroundColor: 'white', 
  },
  separator: {
    height: 1,  
    backgroundColor: 'gray',
    marginVertical: 4
  }
});