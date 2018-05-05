import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

export default EStyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    '@media ios': {
      paddingTop: 20,
      //
    },
    '@media android': {
      paddingTop: StatusBar.currentHeight
      //
    }
  },
  button: {
    alignSelf: 'flex-end',
    padding: 10
    // resizeMode="contain"
  }
});
