import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Dimensions,
  Image,
  ListView,
  PixelRatio,
  StatusBar,
  AlertIOS
} from 'react-native';

import ParallaxScrollView from 'react-native-parallax-scroll-view';

const FancyImage = require('../components/FancyImage');
const MapIcon = require('../components/MapIcon');
const Avatar = require('../components/Avatar');


const style = require('../styles/');

export default class ActionInfo extends Component {
	
	constructor(props) {
    super(props);
    this.state =  {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRows([
        

      ])
    };


    this.props.navigator.setOnNavigatorEvent(function(event) {
      console.log(event);

      if (event.type == 'NavBarButtonPress') { 

          if (event.id == 'Close') { 
            
            let ret = this.props.navigator.dismissModal({
              animationType: 'slide-down' 
            });

            this.props.navigator.switchToTab({
              tabIndex: 0 
            });

          }

      }

    }.bind(this));
  }

  goBack() {
    this.props.navigator.pop();
  }

  renderHeader() {
    return (

      <View style={[style.s.container, styles.actionMainInfoContainer]}>
        <View style={[styles.topRow, styles.rowSection]}>
          <View style={[styles.actionMainInfoContainerLeft]}>
            
            <MapIcon lat="40.714728" lng="-73.998672" />
            <View style = {[style.s.container, {marginTop:-6, marginLeft: 10}]}>
              <Text style={style.s.title1}>
                Located @
              </Text>
              <Text style={[style.s.p, style.s.a, {fontSize: 14, lineHeight: 15, marginTop: 3}]}>
                321 N Orange St,{"\n"}
                Glendale, CA
              </Text>
            </View>

          </View>

          <View style={[styles.actionMainInfoContainerRight]}>
            <View style={[styles.rowAvatars]}>
              <Avatar id="lady" size={24} style={{marginLeft:-8}} />
              <Avatar id="lady" size={24} style={{marginLeft:-8}} />
              <Avatar id="lady" size={24} style={{marginLeft:-8}} />
              <Avatar id="lady" size={24} style={{marginLeft:-8, marginRight: 2}} />
              <Text style={style.s.p}>+</Text>
            </View>
            <Text style={style.s.small}>123 Participants</Text>
          </View>
        </View>

        <View style={[styles.bottomRow, styles.rowSection]}>

          <Text style={[style.s.h1, {fontSize: 11, lineHeight: 16, marginBottom: 20}]}>Commit Now, this Action Needs 543 More People to Unify</Text>

          <View style={styles.progressCirclesBarContainer}>
            <View style={styles.progressCircleActive} />
            <View style={styles.progressCircleActive} />
            <View style={styles.progressCircleActive} />
            <View style={styles.progressCircleActive} />
            <View style={styles.progressCircleActive} />
            <View style={styles.progressCircleActive} />
            <View style={styles.progressCircle} />
            <View style={styles.progressCircle} />
            <View style={styles.progressCircle} />
            <View style={styles.progressCircle} />
            <View style={styles.progressCircle} />
            <View style={styles.progressCircle} />
            <View style={styles.progressCircle} />
            <View style={styles.progressCircle} />
            <View style={styles.progressCircle} />
            <View style={styles.progressCircle} />
            <View style={styles.progressCircle} />
            <View style={styles.progressCircle} />
            <View style={styles.progressCircle} />
            <View style={styles.progressCircle} />
            <View style={styles.progressCircle} />
          </View>

        </View>

        <View style={[styles.descriptionRow, styles.rowSection]}>
          <Text style={[style.s.small, style.s.fontBold]}>Description</Text>
          <Text style={[style.s.p, {fontSize: 14, marginTop: 8}]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis condimentum leo vitae viverra. Praesent pharetra lectus sed maximus rhoncus. Aliquam cursus leo diam, at pretium mauris venenatis sed. 
          </Text>
        </View>

        <View style={[styles.howToCheckIn, styles.rowSection]}>
          <Text style={[style.s.small, style.s.fontBold]}>Checkin In By</Text>
          <Text style={[style.s.p, {fontSize: 14, marginTop: 8}]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </Text>
        </View>

      </View>

    );
  }

	render() {
    
    const { onScroll = () => {} } = this.props;

    return (
      <View style={style.s.container}>
        
        <StatusBar barStyle="light-content" />

        <ListView
          ref="ListView"
          style={style.s.container}
          dataSource={ this.state.dataSource }
          renderRow={(rowData) => (
            <View key={rowData} style={ styles.row }>
              <Text style={ styles.rowText }>
                { rowData }
              </Text>
            </View>
           )}
          renderHeader = {this.renderHeader}
          
          renderScrollComponent={props => (
            <ParallaxScrollView
              onScroll={onScroll}
              headerBackgroundColor="transparent"
              contentBackgroundColor="transparent"
              stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
              parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
              backgroundSpeed={10}
              renderBackground={() => (
                <View key="background">
                  <FancyImage source={{uri: 'https://res.cloudinary.com/pepperjelly/image/upload/fl_relative,w_1.0,h_1.0,o_35,l_blackSquare_zthf62/fl_relative,w_1,h_1.0,e_screen,o_85,l_gradientScreenOverlay_r1nbci/s3/users/573b4de5134390163b856a6c/A6329AAC-E2DD-4603-89AE-2C6BA0BBFCC7.jpg'}}
                            style= {{width: window.width, height: PARALLAX_HEADER_HEIGHT}} />
                </View>
              )}

              renderForeground={() => (
                <View key="parallax-header" style={ styles.parallaxHeader }>
                  <Text style={[style.s.h1, styles.headerText]}>
                    Talks by Rich Hickey
                  </Text>
                  
                  <View style={styles.timeInfoContainer}>
                    <View style={styles.dateTimeInfo}>
                      <View style={styles.dateDay}><Text style={[style.s.h1, styles.dateDayText]}>SUNDAY MAY 7</Text></View>
                      <View style={styles.timeInfo}><Text style={[style.s.h1, styles.timeInfoText]}>10AM TO 12PM</Text></View>
                    </View>

                    <View style={styles.timeLeft}>
                      <Image source={require("../images/timeIcon.png")} style={{width: 14, height: 14}} />
                      <Text style={[style.s.p, styles.timeLeftText, style.s.fontBold]}>1 Day to Unify</Text>
                    </View>
                  </View>

                </View>
              )}

              renderStickyHeader={() => (
                <View key="sticky-header" style={styles.stickySection}>
                  <Text style={[style.s.p, styles.stickySectionText ]}>Rich Hickey Talks</Text>
                </View>
              )}

              renderFixedHeader={() => (
                <View key="fixed-header" style={styles.fixedSection}>
                  <View style={styles.fixedSectionLeftSide}>
                    <TouchableOpacity onPress={()=>{this.goBack()}}>
                      <Image source={require("../images/backIcon.png")} style={{width: 9, height: 18}} />
                    </TouchableOpacity> 
                  </View>
                  <View style={styles.fixedSectionRightSide}>
                    <Avatar id="lady" size={24} />
                    <Text style={[style.s.h2, {fontSize: 12, color: "white"}]}>Test</Text>
                  </View>
                </View>
              )}

              />
          )}
        />

        <View style={styles.stickyFooter}>

          <View style={styles.stickyFooterActionIcons}>
            
            <TouchableOpacity>
              <Image source={require("../images/heartIcon.png")} style={{width: 25, height: 21}} />
            </TouchableOpacity> 

            <TouchableOpacity>
              <Image source={require("../images/shareIcon.png")} style={{width: 21, height: 22}} />
            </TouchableOpacity> 

            <TouchableOpacity>
              <Image source={require("../images/flagIcon.png")} style={{width: 21, height: 23}} />
            </TouchableOpacity> 
            
          </View>

          
          <View style={styles.stickyFooterMainAction}> 
              
                <Text style={[styles.footerMainActionBtn, style.s.fontBold]}>
                  
                    Join Chat!
                  
                </Text>
              
          </View>
          

        </View>

      </View>
    );

  }
}




const window = Dimensions.get('window');

const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = window.width;
const STICKY_HEADER_HEIGHT = 80;

const styles = StyleSheet.create({

  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: window.width,
    justifyContent: 'center',
    backgroundColor: style.mainColor,
    alignItems: "center",
  },
  stickySectionText: {
    color: 'white',
    paddingTop: 10,
  },

  parallaxHeader: {
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'column',
    justifyContent: "flex-end",
    margin: 28,
  },

  headerText: {
    color: 'white',
    paddingVertical: 5
  },

  fixedSection: {
    position: 'absolute',
    left: 20,
    right: 20,
    flex: 1,
    flexDirection: "row",
    height: STICKY_HEADER_HEIGHT,
    justifyContent: "flex-start",
    backgroundColor: "transparent",
    alignItems: "center",
  },

  fixedSectionLeftSide: {
    flex: 0.5,
    paddingTop: 10,
    width: 50,
  },

  fixedSectionRightSide: {
    flex: 0.5,
    alignItems: "flex-end",
    paddingTop: 10,

  },

  timeInfoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    maxHeight: 26,

  },

  dateTimeInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  dateDay: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2
  },

  dateDayText: {
    color: style.darkColor,
    fontSize: 10,
    lineHeight: 14,
  },

  timeInfo: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    backgroundColor: style.mainColor,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2
  },

  timeInfoText: {
    color: "#fff",
    fontSize: 10,
    lineHeight: 14,
  },

  timeLeft: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  timeLeftText: {
    color: "#fff",
    fontSize: 10,
    marginLeft: 3,
  },

  rowSection: {
    margin: 28,
    marginBottom: 20,
    paddingTop: 20,
    borderTopWidth: 0.5,
    borderTopColor: style.lighGrey,
    marginTop: 0,
    flex: 1,
  },

  topRow: {
    flexDirection: "row",
  },

  bottomRow: {
    margin: 28,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  actionMainInfoContainer: {
    backgroundColor: "white",
  },

  actionMainInfoContainerLeft: {
    flex: 3,
    flexDirection: "row",
    
  },

  actionMainInfoContainerRight: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-end"
  },

  rowAvatars: {
    flexDirection: "row",
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },

  progressCirclesBarContainer: {
    flex: 1,
    height: 11,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  progressCircle: {
    width: 11,
    height: 11,
    backgroundColor: style.lighGrey,
    borderRadius: 11,
    marginHorizontal: 5,
  },

  progressCircleActive: {
    width: 11,
    height: 11,
    backgroundColor: style.mainColor,
    borderRadius: 11,
    marginHorizontal: 5,
  },

  descriptionRow: {

  },

  stickyFooter: {
    width: window.width,
    height: 49,
    backgroundColor: style.lighGrey,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "stretch",
  },

  stickyFooterActionIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
    marginRight: 10,

  },

  stickyFooterMainAction: {
    flex: 1,
    backgroundColor: style.mainColor,
    alignItems: "stretch",
    justifyContent: "center",

  },

  footerMainActionBtn: {
    alignSelf: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 18,
  },

  rowText: {
    fontSize: 20
  }
});
