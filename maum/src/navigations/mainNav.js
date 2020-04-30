import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../views/home';
import Chat from '../views/chat';
import Ranking from '../views/ranking';
import Statistics from '../views/statistics';
import Gallary from '../views/gallary';
import Setting from '../views/setting';

const Draw = createDrawerNavigator();
export default () => {
  return (
    <Draw.Navigator initialRouteName="Home">
      <Draw.Screen name="Home" component={Home} options={{drawerLabel: '홈'}} />
      <Draw.Screen
        name="Chat"
        component={Chat}
        options={{drawerLabel: '채팅'}}
      />
      <Draw.Screen
        name="Ranking"
        component={Ranking}
        options={{drawerLabel: '랭킹'}}
      />
      <Draw.Screen
        name="Statistics"
        component={Statistics}
        options={{drawerLabel: '통계'}}
      />
      <Draw.Screen
        name="Gallary"
        component={Gallary}
        options={{drawerLabel: '앨범'}}
      />
      <Draw.Screen
        name="Setting"
        component={Setting}
        options={{drawerLabel: '설정'}}
      />
    </Draw.Navigator>
  );
};
