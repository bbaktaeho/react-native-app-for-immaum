import React, {useState} from 'react';
import {Button, Overlay, Text} from 'react-native-elements';

export default ({isVisible, onBackdropPress}) => {
  return (
    <Overlay isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <Text>Hello from Overlay!</Text>
    </Overlay>
  );
};
