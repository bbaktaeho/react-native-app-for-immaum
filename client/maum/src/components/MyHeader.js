import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Header} from 'react-native-elements';
import {LeftIcon, RightIcon} from './IconMenu';

const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  header: {
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    height: Platform.OS === 'android' ? screenHeight / 9 : screenHeight / 8,
    backgroundColor: '#8D8A8A',
  },
});

const MyHeader = ({navigation, title = 'empty'}) => {
  return (
    <Header
      barStyle="dark-content"
      statusBarProps={{backgroundColor: '#8D8A8A'}}
      leftComponent={<LeftIcon navigation={navigation} />}
      centerComponent={{
        text: title,
        style: {color: '#000000', fontWeight: 'bold'},
      }}
      rightComponent={<RightIcon navigation={navigation} />}
      containerStyle={styles.header}
    />
  );
};

export default MyHeader;
