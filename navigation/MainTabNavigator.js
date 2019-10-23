import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HeaderMenu from '../components/HeaderMenu';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import CasaScreen from '../screens/CasaScreen.js';
import SettingsScreen from '../screens/SettingsScreen';
// import ConfigScreen from '../screens/ConfigScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const Casa = createStackNavigator(
  {
    Casa:CasaScreen,
  },
  config
);

Casa.navigationOptions ={
  tabBarLabel:'Casa',
  tabBarIcon:({ focused }) =>(
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
    ),
};

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Link',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';


// tabNavigator.path = '';

// const ConfigStack = createStackNavigator(
//   {
//     Config: ConfigScreen,
//   },
//   config
// );

// ConfigStack.navigationOptions = {
//   tabBarLabel: 'Config',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
//   ),
// };

// SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  Casa,
  LinksStack,
  HomeStack,
  SettingsStack,
  // CongigStack,
});

tabNavigator.path = '';

export default tabNavigator;
