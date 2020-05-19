import React from 'react';
import SplashScreen from 'react-native-splash-screen';

import {store} from './src/store/store';
import Start from './src/views/Start';
import {Provider} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }
  render() {
    return (
      <Provider store={store}>
        <Start />
      </Provider>
    );
  }
}

export default App;
