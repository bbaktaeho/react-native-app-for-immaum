import React from 'react';

import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

// View
import Intro from './intro';
import Selection from './selection';

const Start = props => {
  const isSkip = useSelector(state => state.isSkip);
  return (
    <NavigationContainer>
      {!isSkip && <Intro />}
      {isSkip && <Selection />}
    </NavigationContainer>
  );
};

export default Start;
