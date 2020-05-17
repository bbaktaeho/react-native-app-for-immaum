import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainNav from './mainNav';

const Navigation = props => {
  return (
    <NavigationContainer>
      <MainNav />
    </NavigationContainer>
  );
};

export default Navigation;
