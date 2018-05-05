import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  itemButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '$lightGray',
    padding: 10,
    height: 50
    // marginHorizontal: 10,
  },
  itemText: {
    color: '$darkText',
    paddingHorizontal: 10,
    alignSelf: 'center'
  },
  checkIcon: {
    color: 'green',
    fontSize: 25,
    alignSelf: 'center'
  },
  separator: {
    backgroundColor: '$borderColor',
    paddingVertical: 0.4,
    flex: 1,
    height: 2
  }
});
