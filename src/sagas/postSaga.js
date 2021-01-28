import { put, call, all, takeLatest } from 'redux-saga/effects';

import { getPostDataSuccess, getPostData } from '../actions';
import getPostsList from '../api';

export function* getPostDataSaga() {
  const response = yield call(getPostsList);

  yield put(getPostDataSuccess(response.data));
}

export default function* postSaga() {
  yield all([
    takeLatest(getPostData, getPostDataSaga),
  ]);
}
