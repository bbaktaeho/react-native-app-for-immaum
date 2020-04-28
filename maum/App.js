import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {store} from './src/store/store';
import Start from './src/views/Start';
import {Provider} from 'react-redux';

class App extends React.Component {
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
