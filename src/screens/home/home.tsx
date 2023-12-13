import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SearchBar from '@/components/molecule/search-bar/search-bar';
import LocationDevliery from '@/components/molecule/location-delivery/location-delivery';

import styles from './home.styles';
import DiscountOffers from '@/components/templates/discount-offers/discount-offers';
import {HeadingOne} from '@/components/atom/text/text';
import RecommendedProductList from '@/components/templates/recommended-product-list/recommended-product-list';

const HomeScreen: FC = () => {
  const {navigate} = useNavigation();

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
