import { configureStore } from '@reduxjs/toolkit';
import { clicksSlice } from './clicksSlice';

export const store = configureStore({
  reducer: {
    clicks: clicksSlice.reducer,
  },
});
