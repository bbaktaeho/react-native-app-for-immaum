import React from 'react';
import {Icon} from 'react-native-elements';

const LeftIcon = ({navigation}) => {
  return (
    <Icon name="menu" color="#fff" onPress={() => navigation.openDrawer()} />
  );
};

export default LeftIcon;
