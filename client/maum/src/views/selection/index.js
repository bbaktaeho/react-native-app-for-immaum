import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, AsyncStorage} from 'react-native';
import {CheckBox, Image, Button} from 'react-native-elements';

import MyOverlay from '../../components/MyOverlay';
import {useDispatch} from 'react-redux';
import {isSelection} from '../../store/actions';

const Selection = props => {
  const [father, setFather] = useState(false);
  const [mother, setMother] = useState(false);
  const [sister, setSister] = useState(false);
  const [me, setMe] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const dispatch = useDispatch();

  const check = value => {
    switch (value) {
      case 1:
        setFather(true);
        setMother(false);
        setSister(false);
        setMe(false);
        break;
      case 2:
        setFather(false);
        setMother(true);
        setSister(false);
        setMe(false);
        break;
      case 3:
        setFather(false);
        setMother(false);
        setSister(true);
        setMe(false);
        break;
      case 4:
        setFather(false);
        setMother(false);
        setSister(false);
        setMe(true);
        break;

      default:
        break;
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>당신은 누구인가요?</Text>
      </View>
      <View style={styles.checkBoxContainer}>
        <CheckBox
          center
          title="경학"
          checked={father}
          onPress={() => check(1)}
        />
        <CheckBox
          center
          title="명자"
          checked={mother}
          onPress={() => check(2)}
        />
        <CheckBox
          center
          title="솔히"
          checked={sister}
          onPress={() => check(3)}
        />
        <CheckBox center title="태호" checked={me} onPress={() => check(4)} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="시작하기"
          type="outline"
          onPress={() => setVisible(!visible)}
        />
      </View>
      <MyOverlay isVisible={visible} onBackdropPress={toggleOverlay} />
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
