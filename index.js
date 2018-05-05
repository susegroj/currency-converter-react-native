import { AppRegistry } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import App from './src/App';

EStyleSheet.build({
  $primaryBlue: '#4f6d7e',

  $white: '#ffffff',
  $borderColor: '#e2e2e2',
  $inputText: '#797979',
  $lightGray: '#f0f0f0',
  $darkText: '#343434',
  // $outline: 1
});

AppRegistry.registerComponent('CurrencyConverter', () => App);
