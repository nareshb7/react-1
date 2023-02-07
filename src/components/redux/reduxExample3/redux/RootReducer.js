import { combineReducers } from 'redux';
import { R3_Reducer } from './Reducer';

export const rootReducer = combineReducers({
  products: R3_Reducer,
});
