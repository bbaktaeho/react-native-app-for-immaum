import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import MyHeader from '../../components/MyHeader';

const Ranking = ({navigation}) => {
  return (
    <>
      <MyHeader navigation={navigation} title="랭킹" />

      <SafeAreaView>
        <Text>순위</Text>
      </SafeAreaView>
    </>
  );
};

export default Ranking;
