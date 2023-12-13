interface InputTextProps {
  editable?: boolean;
  multiline?: boolean;
  hint?: string;
  maxLength?: number;
  autoCap?: 'characters' | 'words' | 'sentences' | 'none';
  value?: string;
  onChangeText?: (text: string) => void;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
  style?: object;
  autoFocus?: boolean;
  onSubmitEditing?: () => void;
  selectionColor?: string;
  placeholderTextColor?: string;
  colors?: string;
  secureTextEntry?: boolean;
  inputStyle?: object;
  right?: string | React.ReactNode;
  left?: string | React.ReactNode;
  rightTxtStyle?: object;
  leftTxtStyle?: object;
  onPress?: () => void;
  textAlign?: 'right' | 'left' | 'center';
  numberOfLines?: number;
}

export type {InputTextProps};
