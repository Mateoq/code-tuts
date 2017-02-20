/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/app/store';

import Todo from './src/app/Todo';
import Fancy from './src/app/Fancy';
import Reddit from './src/app/Reddit';


const Todos = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
);

AppRegistry.registerComponent('Todos', () => Todos);
