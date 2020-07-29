import { call, put, takeLatest, select, delay } from 'redux-saga/effects';
import { GET_WALLETS, GET_WALLETS_ASYNC } from './action-types';
import  fetchService  from '../../utils/fetchService';

function* getWalletsAsync() {
  try {    
    const data = yield call(fetchService, 'wallets', 'GET');
    
    yield put({
      type: GET_WALLETS_ASYNC,
      payload: data
    })
  }
  catch(error) {
    console.log(error);
  }
} 

export function* watchGetWalletsAsync(){
  yield takeLatest(GET_WALLETS, getWalletsAsync);
}