import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { R2_Reducer } from './Reducer';

export const R2_Store = configureStore({
  reducer: R2_Reducer,
});
