import React from 'react';
import {View, SafeAreaView} from 'react-native';
import StartView from './src/views/startView.js';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <StartView />
      </SafeAreaView>
    );
  }
}

export default App;
