import {ActionTypes} from '../constants/actionTypes';

export function getPostData(payload) {
  return {
    type: ActionTypes.GET_POST_DATA,
    payload
  }
}
