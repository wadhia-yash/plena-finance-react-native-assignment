import {createSelector} from 'reselect';

import {RootState} from '../store';

const selectorFavReducer = ({fav}: RootState) => fav;

export const selectFavItems = createSelector(
  [selectorFavReducer],
  fav => fav.favItems,
);
