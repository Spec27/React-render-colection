import { createSlice } from '@reduxjs/toolkit';

export const clicksSlice = createSlice({
  name: 'clicks',
  initialState: { value: 0 },
  reducers: {
    increment(state, action) {
      state.value += action.payload;
    },
    reset(state) {
      state.value = 0;
    },
  },
});

export const { increment, reset } = clicksSlice.actions;

export const getClicks = state => state.clicks.value;
