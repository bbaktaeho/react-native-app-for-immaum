import React from 'react';
import {Platform, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {appStart} from '../../store/actions';

const styles = StyleSheet.create({
  iosSkip: {
    position: 'absolute',
    right: 20,
    top: 55,
  },
  andSkip: {
    position: 'absolute',
    right: 20,
    top: 33,
  },
  skipText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default () => {
  const dispatch = useDispatch();
  let buttonStyle = styles.andSkip;
  if (Platform.OS === 'ios') buttonStyle = styles.iosSkip;
  return (
    <TouchableOpacity style={buttonStyle} onPress={() => dispatch(appStart())}>
      <Text style={styles.skipText}>SKIP</Text>
    </TouchableOpacity>
  );
};
