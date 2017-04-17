import React, { Component } from 'react';
import { ActivityIndicator, Image, View } from 'react-native';

class MapIcon extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {

		var w = this.props.style ? this.props.style.width : 50;
		var h = w;

		return (
			<View style={[{width: w, height: h, borderRadius:5, overflow: "hidden"}, this.props.style]}>
              <Image source = {{uri: "https://maps.googleapis.com/maps/api/staticmap?center="+ this.props.lat +","+ this.props.lng +"&zoom=14&size="+(w*2)+"x"+((h+15)*2)+"&maptype=roadmap&markers=icon:http://res.cloudinary.com/pepperjelly/image/upload/v1492038935/markerIcon_edllgh.png%7C"+this.props.lat+","+this.props.lng+"&key=AIzaSyA7ZlUrkLmMMQKV8kCJsyWAWs3g0dvOpgE"}}
                style={{width: w, height: h+15, }} />
            </View>
		);
	}
}

module.exports = MapIcon;