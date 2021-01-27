import {ActionTypes} from '../constants/actionTypes';

export function getPostData() {
  return {
    type: ActionTypes.GET_POST_DATA,
  }
}

export function getPostDataSuccess(payload) {
  return {
    type: ActionTypes.GET_POST_DATA_SUCCESS,
    payload
  }
}
