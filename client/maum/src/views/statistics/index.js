import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import MyHeader from '../../components/MyHeader';
const Statistics = ({navigation}) => {
  return (
    <>
      <MyHeader navigation={navigation} title="통계" />

      <SafeAreaView>
        <Text>통계</Text>
      </SafeAreaView>
    </>
  );
};

export default Statistics;
