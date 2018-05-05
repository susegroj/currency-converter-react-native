import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles.js';

const Button = props => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.wrapper} onPress={props.onPress}>
      <Icon style={styles.icon} name={props.icon} size={30} color="white" />
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  </View>
);

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default Button;
