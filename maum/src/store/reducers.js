import {SKIP_INTRO} from './actionTypes';

const initialState = {
  isSkip: false,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SKIP_INTRO:
      return {...state, isSkip: true};

    default:
      return state;
  }
};
