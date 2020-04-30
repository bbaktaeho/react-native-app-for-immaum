import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import Header from '../../components/Header';

const Ranking = ({navigation}) => {
  return (
    <>
      <Header navigation={navigation} />

      <SafeAreaView>
        <Text>순위</Text>
      </SafeAreaView>
    </>
  );
};

export default Ranking;
