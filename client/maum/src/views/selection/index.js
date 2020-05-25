import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import {CheckBox, Image, Button} from 'react-native-elements';

import MyOverlay from '../../components/MyOverlay';
import {useDispatch} from 'react-redux';

const Selection = props => {
  let [user, setUser] = useState('none');
  let [visible, setVisible] = useState(false);

  console.log(user);

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
          checked={user == 'father'}
          onPress={() => setUser('father')}
        />
        <CheckBox
          center
          title="명자"
          checked={user == 'mother'}
          onPress={() => setUser('mother')}
        />
        <CheckBox
          center
          title="솔히"
          checked={user == 'sister'}
          onPress={() => setUser('sister')}
        />
        <CheckBox
          center
          title="태호"
          checked={user == 'me'}
          onPress={() => setUser('me')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          disabled={user == 'none'}
          title="시작하기"
          type="outline"
          onPress={() => toggleOverlay()}
        />
      </View>
      <MyOverlay
        checkUser={user}
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
