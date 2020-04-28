import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {CheckBox} from 'react-native-elements';
export default class Selection extends React.Component {
  state = {check: true};
  render() {
    return (
      <SafeAreaView>
        <View>
          <CheckBox title="Click Here" checked={this.state.checked} />

          <CheckBox center title="Click Here" checked={this.state.checked} />

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
          />
        </View>
      </SafeAreaView>
    );
  }
}
