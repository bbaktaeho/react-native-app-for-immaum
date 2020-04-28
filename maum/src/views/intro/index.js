import React, {Component} from 'react';
import {
  AppRegistry,
  Alert,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Swiper from 'react-native-swiper';

var styles = {
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8D8A8A',
  },
  text: {
    flex: 1,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  iosSkip: {
    position: 'absolute',
    right: 20,
    top: 55,
  },
  andSkip: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  skipText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
};

export default () => (
  <Swiper style={styles.wrapper} showsButtons autoplay={true} loop={false}>
    <View testID="Hello" style={styles.slide}>
      <View style={styles.imageView}>
        {Platform.OS === 'ios' && (
          <TouchableOpacity style={styles.iosSkip}>
            <Text style={styles.skipText}>SKIP</Text>
          </TouchableOpacity>
        )}
        {Platform.OS === 'android' && (
          <TouchableOpacity style={styles.andSkip}>
            <Text style={styles.skipText}>SKIP</Text>
          </TouchableOpacity>
        )}

        <Image
          style={{width: 300, height: 200}}
          source={require('../../../assets/images/intro1.png')}
        />
      </View>
      <Text style={styles.text}>밥을 주면 알려줘요!</Text>
    </View>
    <View testID="Beautiful" style={styles.slide}>
      <View style={styles.imageView}>
        {Platform.OS === 'ios' && (
          <TouchableOpacity style={styles.iosSkip}>
            <Text style={styles.skipText}>SKIP</Text>
          </TouchableOpacity>
        )}
        {Platform.OS === 'android' && (
          <TouchableOpacity style={styles.andSkip}>
            <Text style={styles.skipText}>SKIP</Text>
          </TouchableOpacity>
        )}
        <Image
          style={{width: 200, height: 200}}
          source={require('../../../assets/images/intro2.png')}
        />
      </View>
      <Text style={styles.text}>순위를 알 수 있어요!</Text>
    </View>
    <View testID="Simple" style={styles.slide}>
      <View style={styles.imageView}>
        {Platform.OS === 'ios' && (
          <TouchableOpacity style={styles.iosSkip}>
            <Text style={styles.skipText}>SKIP</Text>
          </TouchableOpacity>
        )}
        {Platform.OS === 'android' && (
          <TouchableOpacity style={styles.andSkip}>
            <Text style={styles.skipText}>SKIP</Text>
          </TouchableOpacity>
        )}
        <Image
          style={{width: 200, height: 200}}
          source={require('../../../assets/images/intro3.png')}
        />
      </View>
      <Text style={styles.text}>통계를 확인해요!</Text>
    </View>
    <View testID="Simple" style={styles.slide}>
      <View style={styles.imageView}>
        {Platform.OS === 'ios' && (
          <TouchableOpacity style={styles.iosSkip}>
            <Text style={styles.skipText}>SKIP</Text>
          </TouchableOpacity>
        )}
        {Platform.OS === 'android' && (
          <TouchableOpacity style={styles.andSkip}>
            <Text style={styles.skipText}>SKIP</Text>
          </TouchableOpacity>
        )}
        <Image
          style={{width: 250, height: 220}}
          source={require('../../../assets/images/intro4.png')}
        />
      </View>
      <Text style={styles.text}>안전한 가족 채팅!</Text>
    </View>
    <View testID="Simple" style={styles.slide}>
      <View style={styles.imageView}>
        {Platform.OS === 'ios' && (
          <TouchableOpacity style={styles.iosSkip}>
            <Text style={styles.skipText}>SKIP</Text>
          </TouchableOpacity>
        )}
        {Platform.OS === 'android' && (
          <TouchableOpacity style={styles.andSkip}>
            <Text style={styles.skipText}>SKIP</Text>
          </TouchableOpacity>
        )}
        <Image
          style={{width: 200, height: 200}}
          source={require('../../../assets/images/intro5.png')}
        />
      </View>
      <Text style={styles.text}>마음이 갤러리!</Text>
    </View>
    <View testID="Simple" style={styles.slide}>
      <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
        밥주러 갑시다!
      </Text>
      <TouchableOpacity>
        <Text>시작하기</Text>
      </TouchableOpacity>
    </View>
  </Swiper>
);
