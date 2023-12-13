import {ReactNode} from 'react';
import {StyleSheet} from 'react-native';

const buttonTypes = ['raised', 'flat', 'icon'];

type ButtonTypes = (typeof buttonTypes)[number];

type style = ReturnType<typeof StyleSheet.create>;

interface BaseButtonProps {
  children: ReactNode;
  label?: string;
  disabled?: boolean;
  style?: style;
  pressColor?: string;
  borderless?: boolean;
  nativeFeedback?: boolean;
  type?: ButtonTypes;
  onPress: () => void;
}

interface IconButtonProps {
  size?: number;
  onPress: () => void;
  style?: style;
  icon: ReactNode;
  color?: string;
  containerStyle?: style;
}

export type {BaseButtonProps, IconButtonProps};
