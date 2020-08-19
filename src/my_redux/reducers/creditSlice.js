import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'credit',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    resetValue: state => {
      state.value = 0;
    },
  },
});

export const { incrementByAmount, decrementByAmount, resetValue } = slice.actions;

export const selectCount = state => state.credit.value;

export default slice.reducer;