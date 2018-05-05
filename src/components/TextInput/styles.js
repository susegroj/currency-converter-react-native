import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const height = 48;
const borderRadius = 4;

export default EStyleSheet.create({
  container: {
    backgroundColor: '$white',
    width: '90%',
    height,
    borderRadius,
    overflow: 'hidden',
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  disableContainer: {
    backgroundColor: '$lightGray'
    //
  },
  buttonContainer: {
    alignItems: 'center',
    height,
    justifyContent: 'center',
    backgroundColor: '$white',
    paddingHorizontal: 15.5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '$primaryBlue',
  },
  input: {
    flex: 1,
    height,
    paddingHorizontal: 10,
    fontSize: 18,
    color: '$inputText'
  },
  border: {
    height,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '$borderColor'
  },
});
