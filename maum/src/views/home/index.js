import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import Header from '../../components/Header';
import ButtonMain from '../../components/ButtonMain';

const Home = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ButtonMain icon="check" text="아침" />
      <ButtonMain icon="check" text="저녁" />
    </SafeAreaView>
  );
};

export default Home;
