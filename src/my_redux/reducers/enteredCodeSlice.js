import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'enteredCode',
  initialState: {
    value: '',
  },
  reducers: {
    addDigits: (state, action) => {
        if (state.value.length < 2) {
          state.value += action.payload;
        }
    },
    removeDigit: (state) => {
            state.value = state.value.substring(0, state.value.length - 1);
            return state;
    },
  },
});

export const { addDigits, removeDigit } = slice.actions;

export const selectCode = state => state.enteredCode.value;

export default slice.reducer;