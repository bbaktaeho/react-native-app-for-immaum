import React from 'react';
import {View, Text, TextInput} from 'react-native';
import io from 'socket.io-client';
import {ListItem} from 'react-native-elements';

export default class ChatTest extends React.Component {
  state = {
    chatMeesage: '',
    chatMeesages: [],
  };

  componentDidMount() {
    this.socket = io('');
    this.socket.on('chat message', msg => {
      this.setState({
        chatMeesages: [...this.state.chatMeesages, msg],
      });
    });
  }

  submitChatMessage() {
    this.socket.emit('chat message', this.state.chatMeesage);
    this.setState({chatMeesage: ''});
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <TextInput
          style={{height: 40, borderWidth: 2}}
          autoCorrect={false}
          value={this.state.chatMeesage}
          onSubmitEditing={() => this.submitChatMessage()}
          onChangeText={chatMeesage => {
            this.setState({chatMeesage});
          }}
        />
        {this.state.chatMeesages.map((msg, i) => (
          <ListItem key={i} title={msg} />
        ))}
      </View>
    );
  }
}
