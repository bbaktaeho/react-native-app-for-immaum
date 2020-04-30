import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import Header from '../../components/Header';

const Gallary = ({navigation}) => {
  return (
    <>
      <Header navigation={navigation} />

      <SafeAreaView>
        <Text>갤러리</Text>
      </SafeAreaView>
    </>
  );
};

export default Gallary;
