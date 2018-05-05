import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

class ListItem extends Component {
  onPress = () => {
    console.warn('onPress');
  }

  render() {
    const { name, selected, onPress } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={styles.itemButton}>
          <Text style={styles.itemText}>{name}</Text>
          {
            selected === name &&
            <Icon name="ios-checkmark-circle" style={styles.checkIcon} />
          }
        </TouchableOpacity>
      </View>
    );
  }
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ListItem;
