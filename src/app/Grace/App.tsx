// src/app/grace/App.tsx
import React from 'react';
import { AppRegistry } from 'react-native';
import AppNavigator from './AppNavigator'; 

const App = () => {
  return <AppNavigator />;
};

export default App;

AppRegistry.registerComponent('Atom', () => App);
