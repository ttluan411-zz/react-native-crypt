import { CoinMarket } from '../utils/api';
import type { CoinMarketCapData } from '../types';

function getAllCoinMarketSuccess(data: CoinMarketCapData ){
    return {
        type: 'GET_ALL_COIN_MARKET_SUCCESS',
        data
    }
}

function getAllCoinMarketError(error:error) {
    return {
        type: 'GET_ALL_COIN_MARKET_ERROR',
        error
    }
}

export function getAllCoinMarket() {
    return async (dispatch) => {
        dispatch({type:'GET_ALL_COIN_MARKET'});
        try {
            const { data } = await CoinMarket.getAll(100);
            return dispatch(getAllCoinMarketSuccess(data))
        } catch (error) {
            return dispatch(getAllCoinMarketError(error));
        }
    }
}