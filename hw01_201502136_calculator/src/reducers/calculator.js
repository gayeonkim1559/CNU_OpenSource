import * as types from '../utils/ActionTypes';

// 초기 상태를 정의합니다
const initialState = {
    inputValue: 0,
    resultValue: 0,
    showingResult: false,
    leftValue: 0,
    finalValue: 0,
    operation: types.PLUS
};

const calculator = (state = initialState, action) => {
  switch (action.type) {
    case types.INPUT_NUMBER:
      return {
        ...state,
        inputValue: state.inputValue * 10 + action.number,
        showingResult: false
      };
    case types.PLUS:
      return {
        ...state,
        inputValue: 0,
        leftValue: state.inputValue,
        operation: types.PLUS,
        showingResult: false
      };
    case types.MINUS:
      return {
        ...state,
        inputValue: 0,
        leftValue: state.inputValue,
        operation: types.MINUS,
        showingResult: false
      };
    case types.DIVISION:
      return {
        ...state,
        inputValue: 0,
        leftValue: state.inputValue,
        operation: types.DIVISION,
        showingResult: false
      };
    case types.MULTIPLICATION:
      return {
        ...state,
        inputValue: 0,
        leftValue: state.inputValue,
        operation: types.MULTIPLICATION,
        showingResult: false
      };
    case types.CLEAR:
      return {
        ...state,
        leftValue: 0,
        inputValue: 0,
        finalValue: 0,
        resultValue: 0,
        showingResult: false
      };
    case types.EQUAL:
      switch(state.operation) {
        case types.PLUS:
          return {
            ...state,
            finalValue : state.leftValue + state.inputValue,
            showingResult: true
          };
        case types.MINUS:
          return {
            ...state,
            finalValue : state.leftValue - state.inputValue,
            showingResult: true
          };
        case types.DIVISION:
          return {
            ...state,
            finalValue : state.leftValue / state.inputValue,
            showingResult: true
          };
        case types.MULTIPLICATION:
          return {
            ...state,
            finalValue : state.leftValue * state.inputValue,
            showingResult: true
          };
        default:
            return state.opertaion;
      }
    default:
        return state;
  }
};

export default calculator;
