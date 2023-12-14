import React, {FC} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import {BodyOne} from '@/components/atom/text/text';
import colors from '@/theme/colors';

import styles from './product-details-header.styles';
import {IconButton} from '@/components/atom/button/button';
import {useNavigation} from '@react-navigation/native';
import {shallowEqual, useSelector} from 'react-redux';
import {selectCartCount} from '@/store/cart/cart.selector';

const ProductHeader: FC<BottomTabHeaderProps> = () => {
  const {navigate, canGoBack, goBack} = useNavigation();

  const cartCount = useSelector(selectCartCount, shallowEqual);

  const handleCartNavigation = () => {
    navigate('ShoppingCart');
  };

  const hadleBack = () => {
    if (canGoBack()) {
      goBack();
    }
  };

  return (
    <View style={styles.container}>
      <IconButton
        icon={<Entypo name="chevron-left" size={17} />}
        containerStyle={styles.backButton}
        onPress={hadleBack}
      />
      <TouchableOpacity
        style={styles.cartView}
        activeOpacity={0.7}
        onPress={handleCartNavigation}>
        <SimpleLineIcons name="handbag" size={24} color={colors.black_100} />
        <View style={styles.badgeView}>
          <BodyOne family="medium" color={colors.white}>
            {cartCount}
          </BodyOne>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductHeader;
