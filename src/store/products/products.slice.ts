import {createSlice, ActionReducerMapBuilder} from '@reduxjs/toolkit';

import {fetchAllProducts, fetchProductDetails} from './products.api';

export interface ProductState {
  products: Array<any>;
  productDetails: any;
  loading: boolean;
  error: any;
}

const initialState: ProductState = {
  products: [],
  productDetails: {},
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<ProductState>) => {
    builder
      .addCase(fetchAllProducts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload?.products;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message;
      })
      .addCase(fetchProductDetails.pending, state => {
        state.loading = true;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetails = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message;
      });
  },
});

export default productsSlice.reducer;
