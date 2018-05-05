import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import Logo from '../../components/Logo/Logo';
import InputWithButton from '../../components/TextInput/TextInput.js';
import Button from '../../components/Button/Button';
import TextStyled from '../../components/TextStyled/TextStyled';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'MXN';
const TEMP_BASE_PRICE = '1';
const TEMP_QUOTE_PRICE = '18.12';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseCurrency: TEMP_BASE_CURRENCY,
      quoteCurrency: TEMP_QUOTE_CURRENCY,
      basePrice: TEMP_BASE_PRICE,
      convertedPrice: TEMP_QUOTE_PRICE,
    };
  }

  onHandleText = (text) => {
    let { convertedPrice } = this.state;
    convertedPrice *= text;
    convertedPrice = convertedPrice.toFixed(2);
    this.setState({
      basePrice: text === '' ? '0' : text,
      convertedPrice
    });
  }

  handleBaseCurrency = () => {
    Actions.currenciesList({ selected: this.state.baseCurrency });
  }

  handleQuoteCurrency = () => {
    console.warn('onPressQuote');
  }

  handleReverse = () => {
    const {
      baseCurrency,
      quoteCurrency,
      basePrice,
      convertedPrice,
    } = this.state;
    this.setState(state => ({
      ...state,
      baseCurrency: quoteCurrency,
      quoteCurrency: baseCurrency,
      basePrice: convertedPrice,
      convertedPrice: basePrice,
    }));
  }

  handleHeader = () => {
    console.warn('header');
  }

  render() {
    const keyProps = {
      ...Platform.select({
        ios: {
          behavior: 'padding',
          //
        },
      })
    };
    return (
      <Container>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <Header onPress={this.handleHeader} />
        <KeyboardAvoidingView {...keyProps} >
          <Logo />
          <InputWithButton
            buttonText={this.state.baseCurrency}
            onPress={this.handleBaseCurrency}
            defaultValue={this.state.basePrice}
            keyboardType="numeric"
            onChangeText={this.onHandleText}
          />
          <InputWithButton
            buttonText={this.state.quoteCurrency}
            onPress={this.handleQuoteCurrency}
            editable={false}
            defaultValue={this.state.convertedPrice}
            value={this.state.convertedPrice}
          />
          <TextStyled
            date={new Date()}
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            conversionRate={parseInt(TEMP_BASE_PRICE, 10)}
          />
          <Button
            icon="ios-repeat-outline"
            title="Reverse currencies"
            onPress={this.handleReverse}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
