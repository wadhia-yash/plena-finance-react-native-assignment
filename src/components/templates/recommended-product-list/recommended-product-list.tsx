import React from 'react';
import {View} from 'react-native';

import {HeadingOne} from '@/components/atom/text/text';
import colors from '@/theme/colors';
import styles from './recommended-product-list.styles';
import ProductGridList from '@/components/molecule/product-list/product-list';

const RecommendedProductList = () => (
  <View style={styles.container}>
    <HeadingOne family="regular" color={colors.black_100}>
      Recommended
    </HeadingOne>
    <ProductGridList />
  </View>
);

export default RecommendedProductList;
