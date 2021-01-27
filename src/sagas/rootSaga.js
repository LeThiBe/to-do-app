import { takeLatest } from 'redux-saga/effects';

import workerSaga from './PostSaga';
import {ActionTypes} from '../constants/actionTypes';

export default function* rootSaga() {
  yield takeLatest(ActionTypes.GET_POST_DATA, workerSaga);
}
