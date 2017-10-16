import * as types from '../utils/ActionTypes';

export const onNumClick = (number) => ({
  type: types.INPUT_NUMBER,
  number,
});

export const onAddBtnClick = () => ({
  type: types.PLUS
});

export const onSubBtnClick = () => ({
  type: types.MINUS
});

export const onMulBtnClick = () => ({
  type: types.MULTIPLICATION
});

export const onDivBtnClick = () => ({
  type: types.DIVISION
});

export const onClearBtnClick = () => ({
  type: types.CLEAR
});

export const onEqBtnClick = () => ({
  type: types.EQUAL
});
