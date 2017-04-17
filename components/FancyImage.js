import React, { Component } from 'react';
import { ActivityIndicator, Image, View } from 'react-native';

import FadeIn from '@expo/react-native-fade-in-image';

class FancyImage extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<FadeIn
				style={this.props.style}
				renderPlaceholderContent = {<View style={{flex: 1}}><Image source = {require("../images/placeholderGradient.png")} style={{flex: 1, opacity: 0.5}} /></View>}
				placeholderStyle={{ backgroundColor: '#fff' }}>
					<Image source={ this.props.source } style={{flex: 1}} />
			</FadeIn>
		);
	}
}

FancyImage.propTypes = {
  style: React.PropTypes.object,
  source: React.PropTypes.object,
};

module.exports = FancyImage;