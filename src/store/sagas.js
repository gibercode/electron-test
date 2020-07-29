import { all, fork } from "redux-saga/effects";
import { watchGetWalletsAsync } from './wallets/saga';

export default function* rootSaga() {
  yield all([
    fork(watchGetWalletsAsync),
  ]);
}