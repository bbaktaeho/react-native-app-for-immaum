import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Overlay, Text, Input} from 'react-native-elements';
import LockIcon from './icons/Lock';

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

export default ({checkUser, isVisible, onBackdropPress}) => {
  let [code, setCode] = useState('');

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
            console.log('통신하기');
          }}
        />
      </View>
    </Overlay>
  );
};
