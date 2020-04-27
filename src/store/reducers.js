/**
 * * action 이 어떻게 변경시켜야 하는지 reducer 가 정의함
 */

import {ADDITION, SUBTRACTION} from './actionsTypes';

const initialState = {
  counter: 0,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDITION:
      return {...state, counter: state.counter + 1};
    case SUBTRACTION:
      return {...state, counter: state.counter - 1};
    default:
      return state;
  }
};
