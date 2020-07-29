import { call } from 'redux-saga/effects';
import axios from 'axios';
import { HOST } from './path';
import { apiToken } from './env';

function* fetchService(url, method = 'GET', params = null) {

  const objectParams = {
    method,
    url: `${HOST}${url}`,
    data: params,
    headers: {
      accept: 'application/json',
      authorization: apiToken
    }
  }

  const res = yield call(axios, objectParams);
  const resBody = res.data;

  return resBody;
}

export default fetchService;
