import {
  StyleSheet,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

export const stylesFancy = StyleSheet.create({
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

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  form: {
    flexDirection: 'row'
  },
  input: {
    flex: 0.7,
    fontSize: 24
  },
  button: {
    flex: 0.3,
    height: 50,
    borderWidth: 1,
    borderColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  todos: {
    marginTop: 60
  },
  todo: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  todoText: {
    fontSize: 24
  }
});
