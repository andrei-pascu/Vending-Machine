import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'errors',
  initialState: {
    code: 0,
  },
  reducers: {
    triggerError: (state, action) => {
      state.code = action.payload;
    }
  },
});

export const { triggerError } = slice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectError = state => state.errors.code;

export default slice.reducer;