import React, {FC} from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import HeartIcon from '../heart-icon/heart-icon';
import {BodyTwo, Label} from '../text/text';

import styles from './products.styles';
import {ProductProps} from './products.props';
import colors from '@/theme/colors';

const ProductItems: FC<ProductProps> = ({
  thumbnail,
  price,
  id,
  title,
}: ProductProps) => {
  const {navigate} = useNavigation();

  const handleProductDetailsNav = () => {
    navigate('ProducDetails', {product_id: id});
  };

  const addToCartButton = () => (
    <TouchableOpacity style={styles.addCartIcon}>
      <Icon name="plus" color={colors.black_1} size={12} />
    </TouchableOpacity>
  );
  return (
    <TouchableOpacity
      style={[styles.gridItem]}
      onPress={handleProductDetailsNav}>
      <View style={styles.button}>
        <View style={styles.heartIcon}>
          <HeartIcon />
        </View>
        <Image source={{uri: thumbnail}} style={styles.thumbnail} />
      </View>
      <View style={styles.addCartContainer}>
        <View style={styles.priceContainer}>
          <BodyTwo family="semi_bold">${price}</BodyTwo>
          {addToCartButton()}
        </View>
        <Label>{title}</Label>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItems;
