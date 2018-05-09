import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';

import { ListItem, Separator } from '../../components/List';

import styles from './styles.js';

class Options extends Component {
  handleThemePress = () => {
    console.warn('Thems');
  }

  handleSitePress = () => {
    console.warn('goingo to site');
  }

  render() {
    const prefix = Platform.OS === 'ios' ? 'ios' : 'md';
    return (
      <ScrollView style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
        <ListItem
          name="Themes"
          onPress={this.handleThemePress}
          customIcon={`${prefix}-arrow-forward`}
        />
        <Separator />
        <ListItem
          name="Fixer.io"
          onPress={this.handleSitePress}
          customIcon={`${prefix}-link`}
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default Options;
