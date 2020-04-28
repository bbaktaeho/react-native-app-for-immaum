import React, {useState, useEffect} from 'react';

import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

// View
import Intro from './intro';
import Selection from './selection';

const Start = props => {
  // const {isSkip} = useSelector(state => state.isSkip);
  const isSkip = useSelector(state => state.isSkip);
  // useEffect(() => {
  //   console.log(isSkip);
  // }, [isSkip]);

  return (
    <NavigationContainer>
      {!isSkip && <Intro />}
      {isSkip && <Selection />}
    </NavigationContainer>
  );
};

export default Start;
