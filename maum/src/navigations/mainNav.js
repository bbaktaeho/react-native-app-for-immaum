import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../views/home';
import Chat from '../views/chat';
import Ranking from '../views/ranking';
import Statistics from '../views/statistics';
import Gallary from '../views/gallary';

const Draw = createDrawerNavigator();
export default () => {
  return (
    <Draw.Navigator initialRouteName="Home">
      <Draw.Screen name="Home" component={Home} />
      <Draw.Screen name="Chat" component={Chat} />
      <Draw.Screen name="Ranking" component={Ranking} />
      <Draw.Screen name="Statistics" component={Statistics} />
      <Draw.Screen name="Gallary" component={Gallary} />
    </Draw.Navigator>
  );
};
