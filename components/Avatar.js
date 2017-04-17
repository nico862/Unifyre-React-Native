import React, { Component } from 'react';
import { ActivityIndicator, Image, View } from 'react-native';

class Avatar extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {

		var w = this.props.size ? this.props.size : 50;
		var h = w;

		return (
			<Image source = {{uri: "https://res.cloudinary.com/demo/image/upload/c_thumb,w_"+ (w*2) +",h_"+ (h*2) +",g_face,r_max,bo_"+Math.ceil(w/6)+"px_solid_white/"+this.props.id+".png"}} style={[{width: w, height: h}, this.props.style]} />
		);
	}
}

module.exports = Avatar;