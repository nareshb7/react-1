import { createStore } from 'redux';
import { rootReducer } from './RootReducer';

export const store = (initialState) => {
  return createStore(rootReducer, initialState);
};
