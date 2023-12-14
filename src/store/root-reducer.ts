import {combineReducers} from '@reduxjs/toolkit';

import productsSlice from './products/products.slice';

const rootReducer = combineReducers({
  product: productsSlice,
});

export default rootReducer;
