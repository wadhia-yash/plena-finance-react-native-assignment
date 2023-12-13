import React, {FC} from 'react';
import {Pressable, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import HeartIcon from '../heart-icon/heart-icon';
import {BodyTwo, Label} from '../text/text';
import {IconButton} from '../button/button';

import styles from './products.styles';
import {ProductProps} from './products.props';
import colors from '@/theme/colors';

const ProductItems: FC<ProductProps> = ({
  thumbnail,
  price,
  id,
  title,
}: ProductProps) => {
  const addToCartButton = () => (
    <Pressable style={styles.addCartIcon}>
      <Icon name="plus" color={colors.black_1} size={12} />
    </Pressable>
  );
  return (
    <View style={[styles.gridItem]}>
      <Pressable style={styles.button} android_ripple={{color: '#ccc'}}>
        <View style={styles.heartIcon}>
          <HeartIcon />
        </View>
        <Image source={{uri: thumbnail}} style={styles.thumbnail} />
      </Pressable>
      <View style={styles.addCartContainer}>
        <View style={styles.priceContainer}>
          <BodyTwo family="semi_bold">${price}</BodyTwo>
          {addToCartButton()}
        </View>
        <Label>{title}</Label>
      </View>
    </View>
  );
};

export default ProductItems;
