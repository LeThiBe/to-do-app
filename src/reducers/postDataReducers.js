import * as types from '../actions/types';

export const initialState = {
  postData: []
};

export default function postDataReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_DATA:
      return Object.assign({}, state, {
        postData: state.postData.concat(action.postData)
      });
    default:
      return state;
  }
};
