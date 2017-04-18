import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';


import style from "../styles"
export default class FirstTabScreen extends Component {
  static navigatorStyle = {};

  constructor(props) {
    super(props);
  }

  closeModal () {
    this.props.navigator.pop()
  }

  render() {
    return (
      <View style={style.createUnifyre.container} >
        <Image style={style.createUnifyre.bgImage} source={require("../images/gradientScreenOverlay.png")} />
        <View style={style.createUnifyre.header}>
          <TouchableOpacity onPress={() => {this.closeModal()}}>
            <Image style={style.createUnifyre.xIcon} source={require("../images/x-icon.png")}/>
          </TouchableOpacity>
          <Text style={style.createUnifyre.headerText}>New Unifyre</Text>
        </View>
      </View>
    );
  }
}