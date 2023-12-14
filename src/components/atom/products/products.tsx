import React, {FC} from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Animated, {BounceIn} from 'react-native-reanimated';

import HeartIcon from '../heart-icon/heart-icon';
import {BodyTwo, Label} from '../text/text';

import colors from '@/theme/colors';
import {addToCart} from '@/store/cart/cart.slice';
import {selectCartItems} from '@/store/cart/cart.selector';
import {addTofav, removeFromfav} from '@/store/favourite/favourite.slice';
import {selectFavItems} from '@/store/favourite/favourite.selector';

import {ProductProps} from './products.props';
import styles from './products.styles';
import {truncateString} from '@/utils/string.utils';

const ProductItems: FC<ProductProps> = (props: ProductProps) => {
  const {navigate} = useNavigation();

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems, shallowEqual);
  const favouriteItems = useSelector(selectFavItems, shallowEqual);

  const {id, thumbnail, price, title} = props;

  const handleProductDetailsNav = () => {
    navigate('ProducDetails', {product_id: id});
  };

  const handleAddToCart = (product: ProductProps) => {
    dispatch(addToCart({cart: cartItems, product}));
  };

  const getLiked = (product): boolean => {
    return favouriteItems.find(favItem => favItem.id === product.id)
      ?.favourite as boolean;
  };

  const handleHeartPress = (isActive: boolean, product: any) => {
    if (isActive) {
      dispatch(addTofav({fav: favouriteItems, product}));
    } else {
      dispatch(removeFromfav({fav: favouriteItems, product}));
    }
  };

  const addToCartButton = (product: ProductProps) => (
    <TouchableOpacity
      style={styles.addCartIcon}
      onPress={() => handleAddToCart(product)}>
      <Icon name="plus" color={colors.black_1} size={12} />
    </TouchableOpacity>
  );
  return (
    <Animated.View style={[styles.gridItem]} entering={BounceIn}>
      <TouchableOpacity
        style={[styles.gridItem]}
        onPress={handleProductDetailsNav}>
        <View style={styles.button}>
          <View style={styles.heartIcon}>
            <HeartIcon
              isLiked={getLiked(props)}
              handleHeartPress={filled => handleHeartPress(filled, props)}
            />
          </View>
          <Animated.Image
            source={{uri: thumbnail}}
            style={styles.thumbnail}
            sharedTransitionTag="product-image"
          />
        </View>
        <View style={styles.addCartContainer}>
          <View style={styles.priceContainer}>
            <BodyTwo family="semi_bold">${price}</BodyTwo>
            {addToCartButton(props)}
          </View>
          <Label>{truncateString(title, 20)}</Label>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ProductItems;
