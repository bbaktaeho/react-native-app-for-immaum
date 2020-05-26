import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import AuthLoading from '../components/AuthLoading';
import Home from '../views/home';
import Chat from '../views/chat';
import ChatTest from '../views/chat/test';
import Ranking from '../views/ranking';
import Statistics from '../views/statistics';
import Gallary from '../views/gallary';
import Setting from '../views/setting';

const Draw = createDrawerNavigator();
const DrawNav = props => {
  return (
    <Draw.Navigator initialRouteName="Home">
      <Draw.Screen name="Home" component={Home} />
      <Draw.Screen name="Chat" component={ChatTest} />
      <Draw.Screen name="Rank" component={Ranking} />
      <Draw.Screen name="Statistic" component={Statistics} />
      <Draw.Screen name="Gallary" component={Gallary} />
      <Draw.Screen name="Setting" component={Setting} />
    </Draw.Navigator>
  );
};
const Stack = createStackNavigator();
const MainNav = props => {
  return (
    <Stack.Navigator initialRouteName="auth">
      <Stack.Screen
        name="auth"
        component={AuthLoading}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="main"
        component={DrawNav}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainNav;
