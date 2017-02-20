import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

// Styles.
import { styles } from './styles';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  componentWillMount() {
    fetch('http://192.168.1.59:3000/todos', {
      method: 'get',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => (res.json()))
    .then((todos) => {
      this.setState({ todos })
    })
    .catch((err) => {
      console.error(err);
    })
  }

  handleChange = (text) => {
    this.setState({ newTodo: text });
  };

  handlePress = () => {
    fetch('http://192.168.1.59:3000/todos', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.newTodo
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => (res.json()))
    .then((todo) => {
      const todos = [todo, ...this.state.todos];
      this.setState({ todos, newTodo: '' });
    })
    .catch((err) => {
      console.error(err);
    });
  };
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={this.state.newTodo}
            onChangeText={this.handleChange}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.handlePress}
          >
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todos}>
          {this.state.todos.map(todo => (
            <View key={todo.id} style={styles.todo}>
              <Text style={styles.todoText}>
                {todo.name}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default Todo;
