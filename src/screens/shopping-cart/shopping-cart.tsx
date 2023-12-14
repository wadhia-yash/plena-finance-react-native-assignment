import React, {FC} from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import Icons from 'react-native-vector-icons/Entypo';
import Animated, {SlideInRight, SlideOutLeft} from 'react-native-reanimated';

import {IconButton, Raised} from '@/components/atom/button/button';
import {BodyOne, BodyTwo} from '@/components/atom/text/text';
import colors from '@/theme/colors';
import {
  selectCartItems,
  selectCartSubTotal,
  selectCartTotal,
} from '@/store/cart/cart.selector';

import styles from './shopping-cart.styles';
import {addToCart, removeFromCart} from '@/store/cart/cart.slice';
import {truncateString} from '@/utils/string.utils';

const ShoppingCartScreen: FC = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems, shallowEqual);
  const cartSubtotal = useSelector(selectCartSubTotal, shallowEqual);
  const cartTotal = useSelector(selectCartTotal, shallowEqual);

  const handleAddToCart = product => {
    dispatch(addToCart({cart: cartItems, product}));
  };

  const handleRemoveFromCart = product => {
    dispatch(removeFromCart({cart: cartItems, product}));
  };

  const renderProduct = ({item, index}) => (
    <Animated.View
      style={styles.productItem}
      entering={SlideInRight.delay(100 + index * 11)}
      exiting={SlideOutLeft}>
      <View style={styles.row}>
        <Image
          source={{uri: item?.thumbnail}}
          style={styles.productThumbnail}
        />
        <View>
          <BodyOne>{truncateString(item.title, 20)}</BodyOne>
          <BodyOne>${item.price}</BodyOne>
        </View>
      </View>
      <View style={[styles.row, styles.counterContainer]}>
        <IconButton
          icon={<Icons name="minus" size={17} />}
          containerStyle={styles.counterButton}
          onPress={() => handleRemoveFromCart(item)}
        />
        <BodyTwo
          family="regular"
          color={colors.black_100}
          style={styles.quantity}>
          {item?.quantity}
        </BodyTwo>
        <IconButton
          icon={<Icons name="plus" size={17} />}
          containerStyle={styles.counterButton}
          onPress={() => handleAddToCart(item)}
        />
      </View>
    </Animated.View>
  );

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={cartItems}
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
              ${cartSubtotal}
            </BodyTwo>
          </View>
          <View style={[styles.row, styles.amountContainer]}>
            <BodyTwo>Delivery</BodyTwo>
            <BodyTwo family="medium" color={colors.black_100}>
              ${cartItems.length > 0 ? 2.0 : 0}
            </BodyTwo>
          </View>
          <View style={[styles.row, styles.amountContainer]}>
            <BodyTwo>Total</BodyTwo>
            <BodyTwo family="medium" color={colors.black_100}>
              ${cartTotal}
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
