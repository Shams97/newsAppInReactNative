import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import Main from './main';
// import Main from './components/main';

export default class App extends React.Component {
  render() {
  return <Main/>;
  }
}