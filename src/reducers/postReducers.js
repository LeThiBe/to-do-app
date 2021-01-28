import {ActionTypes} from '../constants/actionTypes';

export const initialState = [];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_POST_DATA:
      return [...state];
    case ActionTypes.GET_POST_DATA_SUCCESS:
      const {payload} = action;
      return [...state, ...payload];
    default:
      return state;
  }
};

export default postReducer;
