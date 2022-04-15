import React, { Component } from 'react'
import {
  Animated,
  PanResponder,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native'

const fontFamily = "GTWalsheimProRegular";
const fontFamilyBold = "GTWalsheimProBold";
const fontFamilyLight = "GTWalsheimProLight";
const darkColor = "#333232";
const mainColor = "#FF1660";
const lighGrey = "#EFEFEF";
const window = Dimensions.get('window');

module.exports = {
	
	fontFamily: fontFamily,
	fontFamilyBold: fontFamilyBold,
	fontFamilyLight: fontFamilyLight,
	winWidth: window.width,
	winHeight: window.height,

	mainColor: mainColor,
	darkColor: darkColor,
	lighGrey: lighGrey,

	s: StyleSheet.create({
		
		container: {
			flex: 1,
		},

		fontReg: {
			fontFamily: fontFamily
		},

		fontBold: {
			fontFamily: fontFamilyBold
		},

		fontLight: {
			fontFamily: fontFamilyLight
		},

		h1: {
			fontSize: 48,
			fontFamily: fontFamilyBold,
			lineHeight: 48,
		},

		h2: {
			fontSize: 36,
			fontFamily: fontFamilyBold
		},

		p: {
			fontSize: 17,
			fontFamily: fontFamily,
		},

		title1: {
			fontSize: 18,
			fontFamily: fontFamilyLight,
			color: darkColor
		},

		a: {
			color: mainColor
		},

		small: {
			fontSize: 12,
			fontFamily: fontFamily,
		}
	}),
	createUnifyre: StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    header: {
      flex: .5,
      position: "absolute",
      top: 0,
      paddingTop: 15,
      fontSize: 20,
      width: window.width,
      height: 70,
      flexDirection: "row",
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: 'center'
    },
    xIcon: {
      width: 16,
      height: 16,
    },

    bgImage: {
      position: "absolute",
      left: 0,
      top: 0,
      width: window.width,
      height: window.height
    },
    headerText: {
      width: "80%",
      textAlign: "center",
      fontFamily: fontFamilyBold,
      fontSize: 26,
    }
  })
};

