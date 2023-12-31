import {BodyOne} from '@/components/atom/text/text';
import React, {FC} from 'react';
import {View} from 'react-native';

import styles from './categories.styles';

const CategoriesScreen: FC = () => {
  return (
    <View style={styles.container}>
      <BodyOne>Categories</BodyOne>
    </View>
  );
};

export default CategoriesScreen;
