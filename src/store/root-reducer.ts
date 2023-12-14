import {combineReducers} from '@reduxjs/toolkit';
import cartSlice from './cart/cart.slice';
import favouriteSlice from './favourite/favourite.slice';

import productsSlice from './products/products.slice';

const rootReducer = combineReducers({
  product: productsSlice,
  cart: cartSlice,
  fav: favouriteSlice,
});

export default rootReducer;
