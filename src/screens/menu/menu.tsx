import {BodyOne} from '@/components/atom/text/text';
import colors from '@/theme/colors';
import React, {FC} from 'react';
import {View} from 'react-native';

import styles from './menu.styles';

const MenuScreen: FC = () => {
  return (
    <View style={styles.container}>
      <BodyOne color={colors.black_1}>Menu</BodyOne>
    </View>
  );
};

export default MenuScreen;
