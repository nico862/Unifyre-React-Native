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
	})

};

