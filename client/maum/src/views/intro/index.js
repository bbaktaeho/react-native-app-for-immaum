import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import {useDispatch} from 'react-redux';
import {appStart} from '../../store/actions';
import SkipButton from '../../components/intro/skipButton';
import StartButton from '../../components/intro/startButton';

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
  imageView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
};

export default props => {
  const dispatch = useDispatch();
  return (
    <Swiper style={styles.wrapper} showsButtons autoplay={true} loop={false}>
      <View testID="Hello" style={styles.slide}>
        <View style={styles.imageView}>
          <SkipButton />

          <Image
            style={{width: 300, height: 200}}
            source={require('../../../assets/images/intro1.png')}
          />
        </View>
        <Text style={styles.text}>밥을 주면 알려줘요!</Text>
      </View>
      <View testID="Beautiful" style={styles.slide}>
        <View style={styles.imageView}>
          <SkipButton />
          <Image
            style={{width: 200, height: 200}}
            source={require('../../../assets/images/intro2.png')}
          />
        </View>
        <Text style={styles.text}>순위를 알 수 있어요!</Text>
      </View>
      <View testID="Simple" style={styles.slide}>
        <View style={styles.imageView}>
          <SkipButton />
          <Image
            style={{width: 200, height: 200}}
            source={require('../../../assets/images/intro3.png')}
          />
        </View>
        <Text style={styles.text}>통계를 확인해요!</Text>
      </View>
      <View testID="Simple" style={styles.slide}>
        <View style={styles.imageView}>
          <SkipButton />
          <Image
            style={{width: 250, height: 220}}
            source={require('../../../assets/images/intro4.png')}
          />
        </View>
        <Text style={styles.text}>안전한 가족 채팅!</Text>
      </View>
      <View testID="Simple" style={styles.slide}>
        <View style={styles.imageView}>
          <SkipButton />
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
        <StartButton />
      </View>
    </Swiper>
  );
};
