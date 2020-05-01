import React from 'react';
import {Dimensions} from 'react-native';
import {Header} from 'react-native-elements';
import LeftIcon from './IconMenu';

const MyHeader = ({navigation, title = 'empty'}) => {
  return (
    <Header
      leftComponent={<LeftIcon navigation={navigation} />}
      centerComponent={{text: title, style: {color: '#fff'}}}
      rightComponent={{icon: 'home', color: '#fff'}}
    />
  );
};

export default MyHeader;
