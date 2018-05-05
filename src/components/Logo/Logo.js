import React, { Component } from 'react';
import { View, Text, Keyboard, Platform, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';

class Logo extends Component {
  constructor(props) {
    super(props);
    this.iconInitialValue = new Animated.Value(styles.$largeIconSize);
  }

  componentDidMount() {
    let showListener = 'keyboardWillShow';
    let hideListener = 'keyboardWillHide';

    if (Platform.OS === 'android') {
      showListener = 'keyboardDidShow';
      hideListener = 'keyboardDidHide';
    }
    this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide);
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    // First value is what you want to change
    // Second value is configuration variable
    Animated.timing(
      this.iconInitialValue,
      {
        toValue: styles.$smallIconSize,
        duration: 100,
      }
    ).start();
  }

  keyboardHide = () => {
    Animated.timing(
      this.iconInitialValue,
      {
        toValue: styles.$largeIconSize,
        duration: 100
      }
    ).start();
  }

  render() {
    // for Animated animation with vector Icons
    const AnimatedIcon = Animated.createAnimatedComponent(Icon);

    const iconStyles = [
      styles.icon,
      { fontSize: this.iconInitialValue }
    ];
    return (
      <View style={styles.container}>
        <AnimatedIcon name="ios-repeat-outline" style={iconStyles} />
        <Text style={styles.text}>Convertidor de Moneda</Text>
      </View>
    );
  }
}

export default Logo;
