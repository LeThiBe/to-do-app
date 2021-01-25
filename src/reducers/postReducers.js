import * as types from '../constants/actionTypes';

export const initialState = [];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DATA:
      const {payload} = action;
      return [...state, ...payload];
    default:
      return state;
  }
};

export default postReducer;
