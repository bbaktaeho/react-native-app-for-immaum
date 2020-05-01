import React, {Component} from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';
import ButtonMain from '../../components/ButtonMain';

export default class List extends Component {
  static propTypes = {
    items: PropTypes.array,
    onSelect: PropTypes.func,
  };
  static defaultProps = {
    items: [],
    onSelect: () => {},
  };
  render() {
    const {items, onSelect} = this.props;
    return (
      <FlatList
        keyExtractor={item => item.type}
        data={items}
        renderItem={({item, index}) => {
          return (
            <ButtonMain
              text={item.type}
              onPress={() => onSelect({item, index})}
            />
          );
        }}
      />
    );
  }
}
