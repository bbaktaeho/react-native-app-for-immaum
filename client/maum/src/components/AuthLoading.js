import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {BarIndicator} from 'react-native-indicators';
import {useNavigation} from '@react-navigation/native';

const AuthLoading = ({name}) => {
  const navigation = useNavigation();
  let [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(async () => {
      if (await AsyncStorage.getItem('name')) {
      } else await AsyncStorage.setItem('name', JSON.stringify({name: name}));
      setLoaded(true);
      navigation.navigate('main');
    }, 1500);
  }, []);

  return <>{!loaded && <BarIndicator size={60} color="black" />}</>;
};
export default AuthLoading;
