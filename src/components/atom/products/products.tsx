import React, {FC} from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import HeartIcon from '../heart-icon/heart-icon';
import {BodyTwo, Label} from '../text/text';

import styles from './products.styles';
import {ProductProps} from './products.props';
import colors from '@/theme/colors';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {addToCart} from '@/store/cart/cart.slice';
import {selectCartItems} from '@/store/cart/cart.selector';
import {addTofav, removeFromfav} from '@/store/favourite/favourite.slice';
import {selectFavItems} from '@/store/favourite/favourite.selector';

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
    console.log('heart', isActive, product);
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
        <Image source={{uri: thumbnail}} style={styles.thumbnail} />
      </View>
      <View style={styles.addCartContainer}>
        <View style={styles.priceContainer}>
          <BodyTwo family="semi_bold">${price}</BodyTwo>
          {addToCartButton(props)}
        </View>
        <Label>{title}</Label>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItems;
