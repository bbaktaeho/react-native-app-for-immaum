import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainNav from './mainNav';

const Stack = createStackNavigator();

const Navigation = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="main" component={MainNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
