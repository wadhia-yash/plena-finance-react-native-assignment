import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';

import ProductItems from '@/components/atom/products/products';
import {fetchAllProducts} from '@/store/products/products.api';
import {RootState} from '@/store/store';

const ProductGridList = () => {
  const dispatch = useDispatch();

  const {products} = useSelector(
    (state: RootState) => state.product,
    shallowEqual,
  );

  useEffect(() => {
    dispatch(fetchAllProducts() as any);
  }, [dispatch]);

  return (
    <FlatList
      data={products}
      numColumns={2}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 100}}
      renderItem={({index, item}) => <ProductItems {...item} />}
    />
  );
};

export default ProductGridList;
