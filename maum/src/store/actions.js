import {SKIP_INTRO, SKIP_SELECTION} from './actionTypes';

export const appStart = () => ({
  type: SKIP_INTRO,
});

export const isSelection = () => ({
  type: SKIP_SELECTION,
});
