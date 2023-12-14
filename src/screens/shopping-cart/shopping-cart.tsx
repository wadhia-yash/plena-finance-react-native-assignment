import {BodyOne} from '@/components/atom/text/text';
import React, {FC} from 'react';
import {View} from 'react-native';

import styles from './shopping-cart.styles';

const ShoppingCartScreen: FC = () => {
  return (
    <View style={styles.container}>
      <BodyOne>Shopping Cart</BodyOne>
    </View>
  );
};

export default ShoppingCartScreen;
