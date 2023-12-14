import {createSlice} from '@reduxjs/toolkit';

export interface CartState {
  cartItems: Array<any>;
  loading: boolean;
  error: any;
}

const initialState: CartState = {
  cartItems: [],
  loading: false,
  error: null,
};

const addItemsToCart = (cartItems: any, productToAdd: any) => {
  const existingCartItems = cartItems?.find(
    cartItem => cartItem.id === productToAdd.id,
  );

  if (existingCartItems) {
    return cartItems?.map(cartItem =>
      cartItem.id === productToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem,
    );
  }
  return [...cartItems, {...productToAdd, quantity: 1}];
};

const removeItemsFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id,
  );
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems?.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? {...cartItem, quantity: cartItem.quantity - 1}
      : cartItem,
  );
};

const clearCartItem = (cartItems, clearCartItem) =>
  cartItems.filter(cartItem => cartItem.id !== clearCartItem.id);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {cart, product} = action.payload;
      state.cartItems = addItemsToCart(cart, product);
    },
    removeFromCart: (state, action) => {
      const {cart, product} = action.payload;
      state.cartItems = removeItemsFromCart(cart, product);
    },
    clearItemFromCart: (state, action) => {
      const {cart, product} = action.payload;
      state.cartItems = clearCartItem(cart, product);
    },
    clearCart: state => {
      state.cartItems = [];
    },
  },
});

export const {addToCart, removeFromCart, clearItemFromCart, clearCart} =
  cartSlice.actions;
export default cartSlice.reducer;
