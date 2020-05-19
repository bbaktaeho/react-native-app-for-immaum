import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../views/home';
import Chat from '../views/chat';
import ChatTest from '../views/chat/test';
import Ranking from '../views/ranking';
import Statistics from '../views/statistics';
import Gallary from '../views/gallary';
import Setting from '../views/setting';

const Draw = createDrawerNavigator();
export default ({}) => {
  return (
    <Draw.Navigator initialRouteName="Home">
      <Draw.Screen name="홈" component={Home} />
      <Draw.Screen name="채팅" component={ChatTest} />
      <Draw.Screen name="랭킹" component={Ranking} />
      <Draw.Screen name="통계" component={Statistics} />
      <Draw.Screen name="앨범" component={Gallary} />
      <Draw.Screen name="설정" component={Setting} />
    </Draw.Navigator>
  );
};
