import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Overlay, Text, Input} from 'react-native-elements';
import MyInput from './MyInput';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    fontStyle: 'normal',
    paddingBottom: 20,
  },
  button: {width: '90%', position: 'absolute', bottom: 30},
});

export default ({checkUser, isVisible, onBackdropPress, data, onEvent}) => {
  return (
    <Overlay isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <View style={styles.container}>
        <Text style={styles.text}>코드를 입력해주세요</Text>
        <MyInput data={data} onEvent={onEvent} holder="코드 입력" />
        <Button containerStyle={styles.button} title="입력" />
      </View>
    </Overlay>
  );
};
