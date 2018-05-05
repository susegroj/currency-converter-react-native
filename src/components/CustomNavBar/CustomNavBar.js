import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles.js';

const iconStyles = {
  size: 30,
  color: '#000',
  active: 'red'
};

class CustomNavBar extends Component {
  renderLeft = () => {
    if (Actions.currentScene === 'login') {
      return (
        <View>
          <TouchableOpacity
            onPress={() => console.warn('Hamburger button pressed')}
            style={styles.leftIcon}
          >
            <Icon
              name="ios-menu-outline"
              size={iconStyles.size}
              color={iconStyles.color}
            />
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View>
        <TouchableOpacity
          onPress={Actions.pop}
          style={styles.leftIcon}
        >
          {
            Platform.OS === 'ios' ?
            (
              <Icon
                name="ios-arrow-back"
                size={iconStyles.size}
                color={iconStyles.color}
              />
            ) :
            (
              <Icon
                name="md-arrow-back"
                size={iconStyles.size}
                color={iconStyles.color}
              />
            )
          }
        </TouchableOpacity>
      </View>
    );
  }

  renderMiddle = () =>
    (
      <View style={[
        styles.titleContainer,
        {
          paddingRight: Actions.currentScene === 'login' ? 0 : 60,
          paddingLeft: Actions.currentScene === 'login' ? 30 : 0
        }]}
      >
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );


  renderRight = () => {
    if (Actions.currentScene === 'login') {
      return (
        <View style={styles.rigthContainer}>
          <TouchableOpacity
            onPress={() => console.warn('Filter')}
            style={styles.rightIcon}
          >
            <Icon name="ios-options-outline" size={iconStyles.size} color={iconStyles.color} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.warn('Search')}
            style={styles.rightIcon}
          >
            <Icon name="ios-search-outline" size={iconStyles.size} color={iconStyles.color} />
          </TouchableOpacity>
        </View>
      );
    }
    return false;
  };

  render() {
    return (
      <View style={styles.container}>
        { this.renderLeft() }
        { this.renderMiddle() }
        { this.renderRight() }
      </View>
    );
  }
}

CustomNavBar.propTypes = {
  title: PropTypes.string,
  //
};

CustomNavBar.defaultProps = {
  title: '',
  //
};

export default CustomNavBar;
