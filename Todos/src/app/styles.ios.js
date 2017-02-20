import {
  StyleSheet,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ef235f',
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    backgroundColor: 'yellow',
    width: width / 2,
    height: height / 3,
    position: 'absolute',
    top: 20,
    left: 30
  },
  text: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold'
  }
});