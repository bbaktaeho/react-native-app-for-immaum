import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Overlay, Text, Input} from 'react-native-elements';
import LockIcon from './icons/Lock';
import MaumFetch from '../utils/Fetch';
import {URL} from '../configs/netConfig';

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  text: {
    fontWeight: 'bold',
    fontSize: 22,
    fontStyle: 'normal',
    marginTop: 120,
    marginBottom: 80,
  },
  button: {width: '95%', position: 'absolute', bottom: 60},
});

export default ({name, isVisible, onBackdropPress}) => {
  let [code, setCode] = useState('');

  const Fetch = async body => {
    await MaumFetch({url: URL.auth_register, method: 'POST', body})
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Overlay isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <View style={styles.container}>
        <Text style={styles.text}>코드를 입력해주세요</Text>
        <Input
          leftIcon={<LockIcon />}
          placeholder="코드 입력"
          secureTextEntry={true}
          value={code}
          onChangeText={value => setCode(value)}
        />
        <Button
          containerStyle={styles.button}
          title="입력"
          onPress={() => {
            Fetch({name: name, code: code});
          }}
        />
      </View>
    </Overlay>
  );
};
