import {SKIP_INTRO, SKIP_SELECTION} from './actionTypes';

const initialState = {
  isSkip: false,
  isSelection: false,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SKIP_INTRO:
      return {...state, isSkip: true};
    case SKIP_SELECTION:
      return {...state, isSelection: true};
    default:
      return state;
  }
};
