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


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.credit.value;

export default slice.reducer;
