import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles.js';

const Container = props => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
    <View style={styles.container}>
      {props.children}
    </View>
  </TouchableWithoutFeedback>
);


Container.propTypes = {
  children: PropTypes.any.isRequired
  //
};

export default Container;
