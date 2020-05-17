import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import MyHeader from '../../components/MyHeader';

class Chat extends React.Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    const {navigation} = this.props;
    return (
      <>
        <MyHeader navigation={navigation} title="채팅" />

        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </>
    );
  }
}

export default Chat;
