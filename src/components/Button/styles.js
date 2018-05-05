import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 10,
    // backgroundColor: '#000',
    alignItems: 'center'
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '$white',
    fontWeight: '600',
    paddingHorizontal: 10
  },
  icon: {
    fontWeight: '900',
    paddingTop: 3,
    paddingHorizontal: 5
  }
});
