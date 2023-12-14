import React, {FC} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import {BodyOne, HeadingThree, HeadingTwo} from '@/components/atom/text/text';
import colors from '@/theme/colors';

import styles from './shopping-cart-header.styles';
import {IconButton} from '@/components/atom/button/button';
import {useNavigation} from '@react-navigation/native';

const ShoppingHeader: FC<BottomTabHeaderProps> = () => {
  const {navigate, canGoBack, goBack} = useNavigation();

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
        <BodyOne family="regular" color={colors.black_100}>
          Shopping Cart (5)
        </BodyOne>
      </TouchableOpacity>
    </View>
  );
};

export default ShoppingHeader;
