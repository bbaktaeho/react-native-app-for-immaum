import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './stackNav';
import StartView from '../views/startView';
import IntroView from '../views/introView';

export default class RootNav extends React.Component {
  constructor() {
    super();
    this.state = {
      timer: null,
      loading: false,
    };
  }
  async componentDidMount() {
    this.state.timer = setTimeout(() => {
      this.setState({loading: true});
    }, 3000);
  }

  render() {
    const {loading} = this.state;
    return (
      <NavigationContainer>
        {!loading && <StartView />}
        {loading && <IntroView />}
      </NavigationContainer>
    );
  }
}
