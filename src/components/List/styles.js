import EStyleSheet from 'react-native-extended-stylesheet';

const IconStyles = {
  fontSize: 25,
  alignSelf: 'center',
  marginHorizontal: 15,
};

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
  },
  itemText: {
    color: '$darkText',
    paddingHorizontal: 10,
    alignSelf: 'center'
  },
  checkIcon: {
    ...IconStyles,
    color: 'green',
  },
  customIcon: {
    ...IconStyles,
    color: 'gray'
  },
  separator: {
    backgroundColor: '$borderColor',
    paddingVertical: 0.4,
    flex: 1,
    height: 2
  }
});
