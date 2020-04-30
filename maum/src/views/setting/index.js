import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import Header from '../../components/Header';

const Setting = ({navigation}) => {
  return (
    <>
      <Header navigation={navigation} />

      <SafeAreaView>
        <Text>설정</Text>
      </SafeAreaView>
    </>
  );
};

export default Setting;
