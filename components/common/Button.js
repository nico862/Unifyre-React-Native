import React, {
  PropTypes,
  PureComponent,
} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
 
export default class Button extends PureComponent {

  static propTypes = { 
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  static defaultProps = {
    onPress: () => {}, 
  };

  render() {
    const { onPress } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.63}
        onPress={onPress}
        style={stylesButton.buttonContainer}
      >
        <Text
          style={stylesButton.textButton}
        >
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const stylesButton = StyleSheet.create({ 
  buttonContainer:{    
    backgroundColor: '#ff1660', 
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  textButton:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  }
});     