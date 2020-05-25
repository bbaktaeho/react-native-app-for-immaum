import React from 'react';
import {Input} from 'react-native-elements';
import LockIcon from './icons/Lock';

const MyInput = ({holder, data, onEvent}) => {
  return (
    <Input
      leftIcon={<LockIcon />}
      placeholder={holder}
      onChageText={data => onEvent(data)}
    />
  );
};

export default MyInput;
