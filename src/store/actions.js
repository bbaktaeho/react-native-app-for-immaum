/**
 * * action 은 store 에 저장된 상태를 변경시키는 것
 */

import {ADDITION, SUBTRACTION} from './actionsTypes';

export const addtion = () => ({
  type: ADDITION,
});
export const subtraction = () => ({
  type: SUBTRACTION,
});
