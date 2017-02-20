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
import Todo from './src/app/Todo';
import Fancy from './src/app/Fancy';
import Reddit from './src/app/Reddit';

const Todos = () => (<Todo />);

AppRegistry.registerComponent('Todos', () => Todos);
