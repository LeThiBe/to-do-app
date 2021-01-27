import { put, call} from 'redux-saga/effects';

import {getPostDataSuccess } from '../actions';
import axios from "axios";
import { urlGetPost } from '../api';

function fetchPost() {
  return axios({
    method: 'GET',
    url: urlGetPost
  });
}

export default function* workerSaga() {
  const response = yield call(fetchPost);
  const data = response.data;

  yield put(getPostDataSuccess(data));
}
