import {createAsyncThunk} from '@reduxjs/toolkit';

import api from '@/api';

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async () => {
    const response = await fetch(api.GET_ALL_PRODUCTS, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  },
);

export const fetchProductDetails = createAsyncThunk(
  'products/fetchProductDetails',
  async productId => {
    const response = await fetch(`${api.GET_ALL_PRODUCTS}/${productId}`, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  },
);
