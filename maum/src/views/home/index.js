import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import {PURPLE_COLOR, WHITE_COLOR, ITEMS, ReactNativeLogo} from './constants';
import List from './List';
import ButtonMain from '../../components/ButtonMain';

class Home extends Component {
  _onSelect({item, index}) {
    switch (item.type) {
      case 'close':
        this._onProgrammaticClose();
        break;
      default:
        const title = `${item.type} `;
        const payload = '';
        const interval = 1500;
        // local image source
        this.dropDownAlertRef.alertWithType(
          item.type,
          title,
          item.message,
          payload,
          interval,
        );
    }
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
          <ButtonMain
            text="아침"
            onPress={({item, index}) => this._onSelect({item, index})}
          />
          <ButtonMain
            text="저녁"
            onPress={({item, index}) => this._onSelect({item, index})}
          />
        </SafeAreaView>
        <DropdownAlert
          ref={ref => (this.dropDownAlertRef = ref)}
          containerStyle={{
            backgroundColor: PURPLE_COLOR,
          }}
          // showCancel={true}
          // onCancel={this._onCancel}
          onTap={this._onTap}
          titleNumOfLines={2}
          messageNumOfLines={0}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  buttonContainer: {
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
