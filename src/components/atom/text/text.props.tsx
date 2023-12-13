import {ReactNode} from 'react';

interface BaseTextProps {
  children?: ReactNode;
  fontSize?: number;
  fontFamily?: string;
  style?: any;
  color?: string;
}

interface HeadingProps {
  children?: ReactNode;
  family: string;
}

interface BodyProps {
  family?: string;
  children?: ReactNode;
}

interface LabelProps {
  family?: string;
  children?: ReactNode;
}

export type {BaseTextProps, HeadingProps, BodyProps, LabelProps};
