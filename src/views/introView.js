import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default class StartView extends React.Component {
  render() {
    return (
      // <SafeAreaView>
      <Swiper style={styles.wrapper} showsButtons={true} loop={false}>
        <View testID="설명1" style={styles.slide1}>
          <Text>1</Text>
        </View>
        <View testID="설명2" style={styles.slide2}>
          <Text>2</Text>
        </View>
        <View testID="설명3" style={styles.slide3}>
          <Text>3</Text>
        </View>
      </Swiper>
      // </SafeAreaView>
    );
  }
}
