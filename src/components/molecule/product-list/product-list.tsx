import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';

import ProductItems from '@/components/atom/products/products';
import colors from '@/theme/colors';
import products from '@/theme/products.json';

import styles from './product-list.styles';

const data = [
  {id: '1', title: 'Item 1', color: colors.black_20},
  {id: '2', title: 'Item 2', color: colors.black_20},
  {id: '3', title: 'Item 3', color: colors.black_20},
  {id: '4', title: 'Item 4', color: colors.black_20},
  // Add more items as needed
];

const ProductGridList = () => {
  return (
    <FlatList
      data={products.products}
      numColumns={2}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 100}}
      renderItem={({index, item}) => <ProductItems {...item} />}
    />
  );
};

export default ProductGridList;
