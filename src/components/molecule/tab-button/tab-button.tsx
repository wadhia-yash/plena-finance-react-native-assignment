import React, {FC, useRef, useEffect, memo, ReactNode} from 'react';
import {View, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';

import styles from './tab-button.styles';
import {TabButtonProps} from './tab-button.props';

//filled icons - when tabs are active
import HomeFilled from '@/assets/images/home_filled.svg';
import CategoryFilled from '@/assets/images/category_filled.svg';
import HeartFilled from '@/assets/images/heart_filled.svg';

//outline icons - when tabs are inactive
import HomeOutline from '@/assets/images/home_outline.svg';
import CategoryOutline from '@/assets/images/category_outline.svg';
import HeartOutline from '@/assets/images/heart_outline.svg';
import {Label} from '@/components/atom/text/text';
import colors from '@/theme/colors';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const animate1 = {
  0: {scale: 0.5, translateY: 7},
  0.92: {translateY: -34},
  1: {scale: 1.2, translateY: -24},
};
const animate2 = {
  0: {scale: 1.2, translateY: -24},
  1: {scale: 1, translateY: 7},
};

const circle1 = {
  0: {scale: 0},
  1: {scale: 1},
};
const circle2 = {0: {scale: 1}, 1: {scale: 0}};

const TabButton: FC<BottomTabBarButtonProps & TabButtonProps> = (
  props: BottomTabBarButtonProps & TabButtonProps,
) => {
  const {onPress, accessibilityState, size, label} = props;
  const focused = accessibilityState.selected;

  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({scale: 0});
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({scale: 1});
    }
  }, [focused]);

  const getActiveIcons = (_label: string, _size: number): ReactNode => {
    switch (_label) {
      case 'Home':
        return <HomeFilled height={_size} width={_size} />;
      case 'Categories':
        return <CategoryFilled height={_size} width={_size} />;
      case 'Favourite':
        return <HeartFilled height={_size} width={_size} />;
      case 'Menu':
        return (
          <Icon
            name="options-vertical"
            size={_size}
            color={colors.secondary_dark}
          />
        );
    }
  };

  const getInActiveIcons = (_label: string, _size: number): ReactNode => {
    switch (_label) {
      case 'Home':
        return <HomeOutline height={_size} width={_size} />;
      case 'Categories':
        return <CategoryOutline height={_size} width={_size} />;
      case 'Favourite':
        return <HeartOutline height={_size} width={_size} />;
      case 'Menu':
        return (
          <Icon name="options-vertical" size={_size} color={colors.black_100} />
        );
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View ref={viewRef} duration={700} style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          {focused
            ? getActiveIcons(label, size)
            : getInActiveIcons(label, size)}
        </View>
        <Animatable.Text ref={textRef} style={styles.text}>
          <Label color={colors.black_100} family="regular">
            {label}
          </Label>
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default memo(TabButton);
