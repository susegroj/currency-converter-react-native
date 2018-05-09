import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';

import { ListItem, Separator } from '../../components/List';

import styles from './styles.js';

class Themes extends Component {
  handleColorPress = (event) => {
    console.warn('goingo to site', event);
  }

  render() {
    const prefix = Platform.OS === 'ios' ? 'ios' : 'md';
    return (
      <ScrollView style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
        <ListItem
          name="Dark"
          onPress={() => this.handleColorPress('#0c0c0c')}
          customIcon={`${prefix}-water`}
          iconColor="#0c0c0c"
        />
        <Separator />
        <ListItem
          name="Orange"
          onPress={() => this.handleColorPress('orange')}
          customIcon={`${prefix}-water`}
          iconColor="orange"
        />
        <Separator />
        <ListItem
          name="Purple"
          onPress={() => this.handleColorPress('purple')}
          customIcon={`${prefix}-water`}
          iconColor="purple"
        />
        <Separator />
        <ListItem
          name="Tomato"
          onPress={() => this.handleColorPress('tomato')}
          customIcon={`${prefix}-water`}
          iconColor="tomato"
        />
        <Separator />
        <ListItem
          name="Green"
          onPress={() => this.handleColorPress('green')}
          customIcon={`${prefix}-water`}
          iconColor="green"
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default Themes;
