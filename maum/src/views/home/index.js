import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image} from 'react-native';
import ButtonMain from '../../components/ButtonMain';
import MyAlert from '../../components/MyAlert';
const moon = require('../../../assets/images/moon.png');
class Home extends Component {
  _onSelect(title, type) {
    let payload;
    if (title === '저녁') {
      payload = {message: 'moon', source: moon};
    }
    const interval = 1500;
    this.dropDownAlertRef.alertWithType(
      type,
      title,
      '성공적으로 등록 되었습니다!',
      payload,
      interval,
    );
  }
  _onProgrammaticClose = () => {
    this.dropDownAlertRef.closeAction();
  };
  _onClose = data => {
    console.log(data);
  };
  _onCancel = data => {
    console.log(data);
  };
  _onTap = data => {
    console.log(data);
  };
  render() {
    return (
      <>
        <SafeAreaView style={styles.buttonContainer}>
          <View style={styles.buttonView}>
            <ButtonMain
              text="아침"
              color="green"
              onPress={() => this._onSelect('아침', 'success')}
            />
          </View>
          <View style={styles.buttonView}>
            <ButtonMain
              text="저녁"
              color="#5858FA"
              onPress={() => this._onSelect('저녁', 'custom')}
            />
          </View>
        </SafeAreaView>
        <MyAlert compo={this} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// const Home = ({route, navigation}) => {
//   return (
//     <SafeAreaView
//       style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <ButtonMain
//         icon="check"
//         text="아침"
//         onPress={() => navigation.setOptions({title: '홈'})}
//       />
//       <ButtonMain icon="check" text="저녁" />
//     </SafeAreaView>
//   );
// };

export default Home;
