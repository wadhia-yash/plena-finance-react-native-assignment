import React, {FC} from 'react';
import {View} from 'react-native';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';

import {BodyOne} from '@/components/atom/text/text';
import colors from '@/theme/colors';

import styles from './favourite-header.styles';

const FavouriteHeader: FC<BottomTabHeaderProps> = () => {
  return (
    <View style={styles.container}>
      <BodyOne family="medium" color={colors.black_100}>
        Favourite
      </BodyOne>
    </View>
  );
};

export default FavouriteHeader;
