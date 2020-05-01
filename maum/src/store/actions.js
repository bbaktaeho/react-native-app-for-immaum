import {SKIP_INTRO, SKIP_SELECTION, NAVIGATION} from './actionTypes';

export const appStart = () => ({
  type: SKIP_INTRO,
});

export const isSelection = () => ({
  type: SKIP_SELECTION,
});

export const navigation = () => ({
  type: NAVIGATION,
});
