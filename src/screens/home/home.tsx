import React, {FC} from 'react';
import {View} from 'react-native';

import SearchBar from '@/components/molecule/search-bar/search-bar';
import LocationDevliery from '@/components/molecule/location-delivery/location-delivery';

import DiscountOffers from '@/components/templates/discount-offers/discount-offers';
import RecommendedProductList from '@/components/templates/recommended-product-list/recommended-product-list';

import styles from './home.styles';

const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <LocationDevliery />
      <DiscountOffers />
      <RecommendedProductList />
    </View>
  );
};

export default HomeScreen;
