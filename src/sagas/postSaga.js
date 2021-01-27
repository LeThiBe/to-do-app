import { put, call, all, takeLatest } from 'redux-saga/effects';

import { getPostDataSuccess } from '../actions';
import {ActionTypes} from '../constants/actionTypes';
import getPostsList from '../api';

export function* getPostDataSaga() {
  const response = yield call(getPostsList);

  yield put(getPostDataSuccess(response.data));
}

export default function* postSaga() {
  yield all([
    takeLatest(ActionTypes.GET_POST_DATA, getPostDataSaga),
  ]);
}
