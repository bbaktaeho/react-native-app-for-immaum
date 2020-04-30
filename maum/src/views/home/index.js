import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import Header from '../../components/Header';

const Home = ({navigation}) => {
  return (
    <>
      <Header navigation={navigation} />
      <SafeAreaView>
        <Text>홈</Text>
      </SafeAreaView>
    </>
  );
};

export default Home;
