import React, {FC} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {BodyOne, HeadingThree} from '@/components/atom/text/text';
import colors from '@/theme/colors';

import styles from './home-header.styles';

const HomeHeader: FC<BottomTabHeaderProps> = () => {
  return (
    <View style={styles.container}>
      <HeadingThree family="semi_bold" color={colors.black_1}>
        Hey, Rahul
      </HeadingThree>
      <TouchableOpacity style={styles.cartView} activeOpacity={0.7}>
        <Icon name="handbag" size={24} color={colors.black_1} />
        <View style={styles.badgeView}>
          <BodyOne family="medium" color={colors.white}>
            3
          </BodyOne>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
