import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import styles from './styles.js';

class TextStyled extends Component {
  componentWillMount() {
    const date = this.formatDate(this.props.date);
    this.setState({ date });
  }

  formatDate = (date) => {
    let day = date.getDay();
    day = day < 10 ? `0${day}` : day;
    let month = date.getMonth();
    month = month < 10 ? `0${month}` : month;
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
  }

  render() {
    return (
      <Text style={styles.text}>
        {`1 ${this.props.base} = ${this.props.conversionRate} ${this.props.quote} as of ${this.state.date}`}
      </Text>
    );
  }
}

TextStyled.propTypes = {
  date: PropTypes.object.isRequired,
  base: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  conversionRate: PropTypes.number.isRequired,
};

export default TextStyled;
