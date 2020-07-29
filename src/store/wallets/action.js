import { GET_WALLETS } from './action-types';

export const getWallets = (wallets) => {
  return getActionObject(GET_WALLETS, wallets);
}

const getActionObject = (type, payload) => {
  return { type, payload };
}