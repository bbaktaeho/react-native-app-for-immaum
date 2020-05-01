import React from 'react';
import {StyleSheet} from 'react-native';
// import {Button} from 'react-native-material-ui';
import {Button} from 'react-native-elements';

import CheckIcon from '../components/icons/Chcek';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    width: 200,
    borderRadius: 20,
  },
});

const ButtonMain = ({icon = '', text, onPress}) => {
  const item = {
    type: text,
  };
  return (
    <Button
      icon={<CheckIcon />}
      title={text}
      buttonStyle={styles.button}
      iconRight={true}
      onPress={() => onPress({item})}
    />
  );
};

export default ButtonMain;
