import React from 'react';
import {Text, View} from 'react-native';

import fonts from '@/theme/fonts';

import type {
  BaseTextProps,
  BodyProps,
  HeadingProps,
  LabelProps,
} from './text.props';
import colors from '@/theme/colors';

const BaseText = ({
  children,
  fontSize,
  fontFamily,
  style,
  color = colors.black_100,
  ...textProps
}: BaseTextProps) => {
  const computedStyle = {
    fontFamily,
    fontSize,
  };
  return (
    <Text style={[computedStyle, {color}, style]} {...textProps}>
      {children}
    </Text>
  );
};

const HeadingLine = (props: BaseTextProps & HeadingProps) => {
  const {family} = props;
  return <BaseText fontSize={50} fontFamily={fonts[family]} {...props} />;
};

const HeadingOne = (props: BaseTextProps & HeadingProps) => {
  const {family} = props;
  return <BaseText fontSize={30} fontFamily={fonts[family]} {...props} />;
};

const HeadingTwo = (props: BaseTextProps & HeadingProps) => {
  const {family = 'regular'} = props;
  return <BaseText fontSize={26} fontFamily={fonts[family]} {...props} />;
};

const HeadingThree = (props: BaseTextProps & HeadingProps) => {
  const {family = 'regular'} = props;
  return <BaseText fontSize={20} fontFamily={fonts[family]} {...props} />;
};

const HeadingFour = (props: BaseTextProps & HeadingProps) => {
  const {family = 'regular'} = props;
  return <BaseText fontSize={18} fontFamily={fonts[family]} {...props} />;
};

const BodyOne = (props: BodyProps & BaseTextProps) => {
  const {family = 'regular'} = props;
  return <BaseText fontSize={16} fontFamily={fonts[family]} {...props} />;
};

const BodyTwo = (props: BodyProps & BaseTextProps) => {
  const {family = 'regular'} = props;
  return <BaseText fontSize={14} fontFamily={fonts[family]} {...props} />;
};

const Label = (props: LabelProps & BaseTextProps) => {
  const {family = 'regular'} = props;
  return <BaseText fontSize={12} fontFamily={fonts[family]} {...props} />;
};

export {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  BodyOne,
  BodyTwo,
  Label,
  HeadingLine,
};
