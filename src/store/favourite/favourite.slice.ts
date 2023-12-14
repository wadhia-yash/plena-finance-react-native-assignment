import {createSlice} from '@reduxjs/toolkit';

export interface FavState {
  favItems: Array<any>;
  loading: boolean;
  error: any;
}

const initialState: FavState = {
  favItems: [],
  loading: false,
  error: null,
};

const addItemsToFav = (favItems: any, productToAdd: any) => {
  return [...favItems, {...productToAdd, favourite: true}];
};

const removeItemsFromFav = (favItems, favItemToRemove) => {
  const existingCartItem = favItems.find(
    favItem => favItem.id === favItemToRemove.id,
  );
  if (existingCartItem && existingCartItem.favourite) {
    return favItems.filter(favItem => favItem.id !== favItemToRemove.id);
  }

  return favItems?.map(favItem =>
    favItem.id === favItemToRemove.id
      ? {...favItem, favourite: false}
      : favItem,
  );
};

const favSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addTofav: (state, action) => {
      const {fav, product} = action.payload;
      state.favItems = addItemsToFav(fav, product);
    },
    removeFromfav: (state, action) => {
      const {fav, product} = action.payload;
      state.favItems = removeItemsFromFav(fav, product);
    },
  },
});

export const {addTofav, removeFromfav} = favSlice.actions;
export default favSlice.reducer;
