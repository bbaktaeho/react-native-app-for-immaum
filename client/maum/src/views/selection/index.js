import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import {CheckBox, Image, Button} from 'react-native-elements';

import MyOverlay from '../../components/SelectionOverlay';
import {useDispatch} from 'react-redux';

const Selection = props => {
  let [user, setUser] = useState('none');
  let [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>당신은 누구인가요?</Text>
      </View>
      <View style={styles.checkBoxContainer}>
        <CheckBox
          center
          title="경학"
          checked={user == '경학'}
          onPress={() => setUser('경학')}
        />
        <CheckBox
          center
          title="명자"
          checked={user == '명자'}
          onPress={() => setUser('명자')}
        />
        <CheckBox
          center
          title="솔히"
          checked={user == '솔히'}
          onPress={() => setUser('솔히')}
        />
        <CheckBox
          center
          title="태호"
          checked={user == '태호'}
          onPress={() => setUser('태호')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          disabled={user == 'none'}
          title="코드 입력하기"
          type="outline"
          onPress={() => toggleOverlay()}
        />
      </View>
      <MyOverlay
        name={user}
        isVisible={visible}
        onBackdropPress={toggleOverlay}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black'},
  textContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  checkBoxContainer: {flex: 3, justifyContent: 'center'},
  buttonContainer: {flex: 1},
  text: {
    paddingTop: 100,
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default Selection;
