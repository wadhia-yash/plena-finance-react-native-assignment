import {Raised} from '@/components/atom/button/button';
import {BodyOne, BodyTwo} from '@/components/atom/text/text';
import colors from '@/theme/colors';
import React, {FC} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';

import styles from './shopping-cart.styles';

const dummyProducts = [
  {id: 1, name: 'Product 1', price: 19.99},
  {id: 2, name: 'Product 2', price: 29.99},
  {id: 3, name: 'Product 3', price: 39.99},
  {id: 4, name: 'Product 4', price: 49.99},
  {id: 5, name: 'Product 5', price: 59.99},
];

const ShoppingCartScreen: FC = () => {
  const renderProduct = ({item}) => (
    <TouchableOpacity style={styles.productItem}>
      <BodyOne>{item.name}</BodyOne>
      <BodyOne>${item.price}</BodyOne>
    </TouchableOpacity>
  );

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={dummyProducts}
          renderItem={renderProduct}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
      <View style={styles.checkoutContainer}>
        <View style={styles.checkoutInnerContainer}>
          <View style={[styles.row, styles.amountContainer]}>
            <BodyTwo>Subtotal</BodyTwo>
            <BodyTwo family="medium" color={colors.black_100}>
              $36.96
            </BodyTwo>
          </View>
          <View style={[styles.row, styles.amountContainer]}>
            <BodyTwo>Delivery</BodyTwo>
            <BodyTwo family="medium" color={colors.black_100}>
              $2.00
            </BodyTwo>
          </View>
          <View style={[styles.row, styles.amountContainer]}>
            <BodyTwo>Total</BodyTwo>
            <BodyTwo family="medium" color={colors.black_100}>
              $37.96
            </BodyTwo>
          </View>
          <Raised style={styles.checkoutButton}>
            <BodyTwo color={colors.black_1}>Proceed to checkout</BodyTwo>
          </Raised>
        </View>
      </View>
    </View>
  );
};

export default ShoppingCartScreen;
