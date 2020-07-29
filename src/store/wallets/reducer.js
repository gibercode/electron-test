import { GET_WALLETS, GET_WALLETS_ASYNC } from './action-types';

const initialState = null;

const getWallets = (state = initialState, action) => {
  switch(action.type) {
    case GET_WALLETS_ASYNC:
    return { result: action.payload }

    default:
    return state;
  }
}

export default getWallets;