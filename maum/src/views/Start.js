import React from 'react';

import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

// View or Navigation
import Intro from './intro';
import Selection from './selection';
import MainNav from '../navigations/mainNav';

const Start = props => {
  const isSkip = useSelector(state => state.isSkip);
  const isSelection = useSelector(state => state.isSelection);
  return (
    <NavigationContainer>
      {!isSelection && !isSkip && <Intro />}
      {!isSelection && isSkip && <Selection />}
      {isSelection && isSkip && <MainNav />}
    </NavigationContainer>
  );
};

export default Start;
