import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import MyHeader from '../../components/MyHeader';

const Setting = ({navigation}) => {
  return (
    <>
      <MyHeader navigation={navigation} title="설정" />

      <SafeAreaView>
        <Text>설정</Text>
      </SafeAreaView>
    </>
  );
};

export default Setting;
