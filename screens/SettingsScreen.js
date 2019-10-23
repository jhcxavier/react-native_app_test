import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import HeaderMenu from '../components/HeaderMenu';

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <HeaderMenu />, <ExpoConfigView />
}

SettingsScreen.navigationOptions = {
  header: null,
};
//<ExpoConfigView />