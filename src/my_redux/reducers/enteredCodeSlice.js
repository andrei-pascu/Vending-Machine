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
        // if (state.value.length > 0) {
        //     let str = state.value;
        //     str = str.substring(0, str.length - 1);
        //     return str;
        // }
            state.value = state.value.substring(0, state.value.length - 1);
            return state;
    },
  },
});

export const { addDigits, removeDigit } = slice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCode = state => state.enteredCode.value;

export default slice.reducer;