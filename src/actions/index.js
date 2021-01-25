import * as types from '../constants/actionTypes';

export function getPostData(payload) {
  return {
    type: types.GET_DATA,
    payload
  }
}
