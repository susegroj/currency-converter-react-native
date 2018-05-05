import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles.js';

const Header = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon name="ios-cog" size={30} color="white" />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  onPress: PropTypes.func.isRequired,
  //
};

export default Header;
