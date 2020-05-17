import {SKIP_INTRO, SKIP_SELECTION, NAVIGATION} from './actionTypes';

const initialState = {
  isSkip: false,
  isSelection: false,
  navigation: null,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SKIP_INTRO:
      return {...state, isSkip: true};
    case SKIP_SELECTION:
      return {...state, isSelection: true};
    // case NAVIGATION:
    default:
      return state;
  }
};
