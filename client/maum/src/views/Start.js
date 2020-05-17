import React from 'react';
import {useSelector} from 'react-redux';

// View or Navigation
import Intro from './intro';
import Selection from './selection';
import Navigation from '../navigations';

const Start = props => {
  const isSkip = useSelector(state => state.isSkip);
  const isSelection = useSelector(state => state.isSelection);
  return (
    <>
      {!isSelection && !isSkip && <Intro />}
      {!isSelection && isSkip && <Selection />}
      {isSelection && isSkip && <Navigation />}
    </>
  );
};

export default Start;
