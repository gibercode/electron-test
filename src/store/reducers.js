import { combineReducers } from "redux";
import getWallets from './wallets/reducer';

const reducers = combineReducers({
  wallets: getWallets
});

export default reducers;
