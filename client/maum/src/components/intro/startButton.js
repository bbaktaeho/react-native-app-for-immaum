import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {PacmanIndicator} from 'react-native-indicators';
import {useDispatch} from 'react-redux';
import {appStart} from '../../store/actions';
import {myColor} from '../../styles';

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    padding: 20,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default props => {
  const [touch, setTouch] = useState(false);
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        setTouch(true);
        setTimeout(() => {
          dispatch(appStart());
        }, 1500);
      }}>
      {!touch && <Text style={styles.buttonText}>start</Text>}
      {touch && <PacmanIndicator />}
    </TouchableOpacity>
  );
};
