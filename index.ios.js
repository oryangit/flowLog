/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import FlowLogApp from './app/FlowLogApp';

export default class flowLog extends Component {
  render() {
    return (
      <FlowLogApp />
    );
  }
}

AppRegistry.registerComponent('flowLog', () => flowLog);
