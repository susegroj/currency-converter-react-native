import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, TouchableHighlight, Text, View } from 'react-native';
import styles from './styles.js';

class InputWithButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      //
    };
  }

  handleTextChange = text => this.setState({ text });

  render() {
    const { editable, onPress, buttonText } = this.props;
    const containerStyles = [styles.container];
    if (editable === false) {
      containerStyles.push(styles.disableContainer);
    }
    const underlayColor = '#f0f0f0';

    return (
      <View style={containerStyles}>
        <TouchableHighlight
          underlayColor={underlayColor}
          style={styles.buttonContainer}
          onPress={onPress}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableHighlight>
        <View style={styles.border} />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          {...this.props}
          // value={this.state.text}
          placeholder={editable ? 'Currency' : ''}
          // onTextChange={this.handleTextChange}
        />
      </View>
    );
  }
}

InputWithButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  editable: PropTypes.bool,
};

InputWithButton.defaultProps = {
  editable: true,
  //
};

export default InputWithButton;
