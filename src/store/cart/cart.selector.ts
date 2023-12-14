import {createSelector} from 'reselect';

import {RootState} from '../store';

const selectorCartReducer = ({cart}: RootState) => cart;

export const selectCartItems = createSelector(
  [selectorCartReducer],
  cart => cart.cartItems,
);

export const selectCartCount = createSelector([selectCartItems], cartItems =>
  cartItems?.reduce((total, cartItem) => total + cartItem.quantity, 0),
);

export const selectCartSubTotal = createSelector([selectCartItems], cartItems =>
  cartItems?.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0,
  ),
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems?.reduce(
    (total, cartItem) => total + 2 + cartItem.quantity * cartItem.price,
    0,
  ),
);
