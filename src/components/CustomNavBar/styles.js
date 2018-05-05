import { StyleSheet, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    height: (Platform.OS === 'ios') ? 64 : 54,
    flexDirection: 'row',
    paddingTop: (Platform.OS === 'ios') ? 20 : 5,
    backgroundColor: 'white',
  },
  // Render Left
  leftIcon: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 15
  },
  // Render Middle
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: Actions.currentScene === 'login' ? 0 : 60,
    paddingLeft: Actions.currentScene === 'login' ? 30 : 0
  },
  title: {
    alignItems: 'center',
    //
  },
  // Render rigth
  rigthContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingLeft: 10
  },
  rightIcon: {
    paddingRight: 20,
    paddingTop: Platform.OS === 'ios' ? 5 : 10
  }
});

export default styles;
