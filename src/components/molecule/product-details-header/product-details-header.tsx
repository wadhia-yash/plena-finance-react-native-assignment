import React, {FC} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import {BodyOne, HeadingThree} from '@/components/atom/text/text';
import colors from '@/theme/colors';

import styles from './product-details-header.styles';
import {IconButton} from '@/components/atom/button/button';

const ProductHeader: FC<BottomTabHeaderProps> = () => {
  return (
    <View style={styles.container}>
      <IconButton
        icon={<Entypo name="chevron-left" size={17} />}
        containerStyle={styles.backButton}
      />
      <TouchableOpacity style={styles.cartView} activeOpacity={0.7}>
        <SimpleLineIcons name="handbag" size={24} color={colors.black_100} />
        <View style={styles.badgeView}>
          <BodyOne family="medium" color={colors.white}>
            3
          </BodyOne>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductHeader;
