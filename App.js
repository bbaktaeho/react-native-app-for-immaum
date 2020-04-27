import React from 'react';
import {Provider} from 'react-redux';
import RootNav from './src/navigations';
import {store} from './src/store/store.js';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNav />
      </Provider>
    );
  }
}

export default App;
