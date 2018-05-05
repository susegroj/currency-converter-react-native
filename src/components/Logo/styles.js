import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform } from 'react-native';

// const iconWidth = Dimensions.get('window').width;
const $largeIconSize = 200;
const $smallIconSize = $largeIconSize / 2;

export default EStyleSheet.create({
  $largeIconSize,
  $smallIconSize,
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginBottom: 20,
    marginTop: -20,
    color: '#fff',
    fontSize: 20,
    // letterSpacing: 0
  },
  icon: {
    fontSize: $largeIconSize,
    color: '$white'
  }
});
