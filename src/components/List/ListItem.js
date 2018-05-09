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
    const { name, selected, onPress, customIcon } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={styles.itemButton}>
          <Text style={styles.itemText}>{name}</Text>
          {
            selected === name &&
            <Icon name="ios-checkmark-circle" style={styles.checkIcon} />
          }
          {
            customIcon !== '' &&
            <Icon name={customIcon} style={styles.customIcon} />
          }
        </TouchableOpacity>
      </View>
    );
  }
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  customIcon: PropTypes.string,
};

ListItem.defaultProps = {
  selected: '',
  customIcon: '',
};

export default ListItem;
