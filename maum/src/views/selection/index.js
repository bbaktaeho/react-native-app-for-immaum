import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';

// import {CheckBox, Image} from 'react-native-elements';

export default class Selection extends React.Component {
  state = {
    checked: true,
  };
  render() {
    return (
      <SafeAreaView>
        <Text>gdgdg</Text>
        {/* <CheckBox center title="Click Here" checked={this.state.checked} />

        <CheckBox
          center
          title="Click Here"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.checked}
        />

        <CheckBox
          center
          title="Click Here to Remove This Item"
          iconRight
          iconType="material"
          checkedIcon="clear"
          uncheckedIcon="add"
          checkedColor="red"
          checked={this.state.checked}
        />

        <CheckBox
          checkedIcon={
            <Image source={require('../../../assets/images/icon.png')} />
          }
          uncheckedIcon={
            <Image source={require('../../../assets/images/icon.png')} />
          }
          checked={this.state.checked}
          onPress={() => this.setState({checked: !this.state.checked})}
        /> */}
      </SafeAreaView>
    );
  }
}
