import React from "react";
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
import { Image } from 'react-native';

import TemplateFeature from '../../TemplateFeature';
import assets from '../../../assets';

const HomeNav = StackNavigator({
  TemplateFeature: {
    screen: TemplateFeature
  }
}, {
    initialRouteName: "TemplateFeature"
  }
);

const tabNavigatorConfig = {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#1177B7',
    inactiveTintColor: '#C8C8C8',
    style: {
      backgroundColor: 'white',
    }
  },
};

const AppNavigator = TabNavigator({
  Home: {
    screen: HomeNav,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (<Image source={assets['ios-home']} style={{ tintColor: tintColor }} />)
    },
  }
},
  tabNavigatorConfig
);

export default AppNavigator;
