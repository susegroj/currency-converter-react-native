import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

export default EStyleSheet.create({
  container: {
    flex: 1,
    '@media ios': {
      paddingTop: 20,
      //
    },
    '@media android': {
      paddingTop: StatusBar.currentHeight
      //
    },
  },
});
