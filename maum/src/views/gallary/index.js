import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import MyHeader from '../../components/MyHeader';

const Gallary = ({navigation}) => {
  return (
    <>
      <MyHeader navigation={navigation} title="랭킹" />

      <SafeAreaView>
        <Text>앨범</Text>
      </SafeAreaView>
    </>
  );
};

export default Gallary;
