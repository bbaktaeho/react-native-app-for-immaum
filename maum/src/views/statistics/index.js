import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import Header from '../../components/Header';

const Statistics = ({navigation}) => {
  return (
    <>
      <Header navigation={navigation} />

      <SafeAreaView>
        <Text>통계</Text>
      </SafeAreaView>
    </>
  );
};

export default Statistics;
