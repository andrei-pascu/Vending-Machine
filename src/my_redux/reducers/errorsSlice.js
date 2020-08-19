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


export const selectError = state => state.errors.code;

export default slice.reducer;