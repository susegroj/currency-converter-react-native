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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#0355C2'
  },
  list: {
    // backgroundColor: '#fff',
    marginVertical: 5
  },
  // listItem: {
  //   marginHorizontal: 10,
  //   marginVertical: 5,
  //   backgroundColor: '$white',
  //   padding: 15
  // }
});
