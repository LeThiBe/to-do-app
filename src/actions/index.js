import { createActions } from 'redux-actions';

import {ActionTypes} from '../constants/actionTypes';

export const {
  getPostData,
  getPostDataSuccess,
} = createActions({
  [ActionTypes.GET_POST_DATA]: (payload) => payload,
  [ActionTypes.GET_POST_DATA_SUCCESS]: (payload) => payload,
})
