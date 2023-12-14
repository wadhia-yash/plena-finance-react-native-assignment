import {combineReducers} from '@reduxjs/toolkit';
import cartSlice from './cart/cart.slice';

import productsSlice from './products/products.slice';

const rootReducer = combineReducers({
  product: productsSlice,
  cart: cartSlice,
});

export default rootReducer;
