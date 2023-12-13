import React from 'react';
import {
  TouchableNativeFeedback,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './button.styles';
import {BaseButtonProps, IconButtonProps} from './button.props';
import colors from '@/theme/colors';
import {BodyTwo} from '../text/text';

const ANDROID_VERSION_LOLLIPOP = 21;

const Button = ({
  type = 'flat',
  children,
  label,
  disabled,
  onPress,
  style,
  pressColor,
  borderless = true,
  nativeFeedback,
}: BaseButtonProps) => {
  const backgroundColor = colors.primary;
  const color = colors.black_100;
  const rippleColor = colors.primary_dark;

  const content = label ? (
    <BodyTwo color={color} style={{textAlign: 'center'}}>
      {label}
    </BodyTwo>
  ) : (
    React.Children.only(children)
  );

  if (
    nativeFeedback &&
    Platform.OS === 'android' &&
    Platform.Version >= ANDROID_VERSION_LOLLIPOP &&
    type !== 'flat'
  ) {
    const background = TouchableNativeFeedback.Ripple(
      pressColor || rippleColor,
      borderless,
    );

    return (
      <TouchableNativeFeedback
        onPress={onPress}
        background={background}
        delayPressIn={0}>
        <View style={[{backgroundColor}, styles[type], style]}>{content}</View>
      </TouchableNativeFeedback>
    );
  }
  return (
    <TouchableOpacity
      style={[{backgroundColor}, styles[type], style]}
      onPress={onPress}
      activeOpacity={0.7}>
      <View>{content}</View>
    </TouchableOpacity>
  );
};

const Raised = props => <Button {...props} type="raised" />;

const Flat = props => <Button {...props} type="flat" />;

const IconButton = ({onPress, icon, containerStyle}: IconButtonProps) => (
  <TouchableOpacity
    style={[styles.iconButton, containerStyle]}
    onPress={onPress}>
    {icon}
  </TouchableOpacity>
);

export {Raised, Flat, IconButton};
