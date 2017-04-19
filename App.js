import {
  Platform
} from 'react-native';
import {Navigation} from 'react-native-navigation';

import FirstTabScreen from './containers/FirstTabScreen.js';
import ActionInfo from './containers/ActionInfo.js';
import CreateModal from './containers/createModal'
import NewUnifyreScreen from './containers/NewUnifyreScreen'


// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('example.ActionInfo', () => ActionInfo);
  Navigation.registerComponent('example.CreateModal', () => CreateModal);
  Navigation.registerComponent('unifyre.NewUnifyreScreen', () => NewUnifyreScreen);

}
registerScreens();
console.disableYellowBox = true;

const createTabs = () => {

  let tabs = [
    {
      screen: 'example.FirstTabScreen',
      icon: require('./images/flameIcon.png'),
      selectedIcon: require('./images/flameIconActive.png'),
      title: 'First Screen',

    },
    {
      screen: 'example.FirstTabScreen',
      icon: require('./images/searchIcon.png'),
      selectedIcon: require('./images/searchIconActive.png'),
      title: 'Screen Two',
    },
    {
      screen: 'unifyre.NewUnifyreScreen',
      icon: require('./images/addIcon.png'),
      selectedIcon: require('./images/addIcon.png'),
      title: 'New Unifyre',
      overrideBackPress: true,
      
    },
    {
      screen: 'example.FirstTabScreen',
      icon: require('./images/notificationsIcon.png'),
      selectedIcon: require('./images/notificationsIconActive.png'),
      title: 'Screen Two',
    },
    {
      screen: 'example.FirstTabScreen',
      icon: require('./images/profileIcon.png'),
      selectedIcon: require('./images/profileIconActive.png'),
      title: 'Screen Two',
    },
  ];

  return tabs;
};

Navigation.startTabBasedApp({
  tabs: createTabs(),
  appStyle: {
    tabBarBackgroundColor: '#F9F9F9',
    tabBarSelectedButtonColor: '#FE165F',
    orientation: 'portrait' 
  },
  animationType: "slide-down",
});