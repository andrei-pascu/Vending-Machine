


import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'products',
  initialState: {
    productsContainer: [],
  },
  reducers: {
    storeProducts: (state, action) => {
      state.productsContainer = action.payload;
    },
    buyProduct: (state, action) => {
      let buy_code = (action.payload / 10) - 1;
      state.productsContainer[buy_code]['remaining'] -= 1;
    },
  },
});

export const { storeProducts, buyProduct } = slice.actions;

export const select_storedProducts = state => state.products.productsContainer;

export default slice.reducer;