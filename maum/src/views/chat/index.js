import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import Header from '../../components/Header';

const Chat = ({navigation}) => {
  return (
    <>
      <Header navigation={navigation} />

      <SafeAreaView>
        <Text>채팅</Text>
      </SafeAreaView>
    </>
  );
};

export default Chat;
