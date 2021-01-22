import * as types from './types';

export function setData(postData) {
  return {
    type: types.GET_DATA,
    postData
  }
}
