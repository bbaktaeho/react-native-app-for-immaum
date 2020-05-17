import React from 'react';
import {Icon} from 'react-native-elements';

const LeftIcon = ({navigation}) => {
  return (
    <Icon name="menu" color="#000000" onPress={() => navigation.openDrawer()} />
  );
};

const RightIcon = ({navigation}) => {
  return (
    <Icon
      name="home"
      color="#000000"
      onPress={() => navigation.navigate('홈')}
    />
  );
};

export {LeftIcon, RightIcon};
