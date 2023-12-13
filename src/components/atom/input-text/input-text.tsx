import React from 'react';
import {useState} from 'react';
import {TextInput, Pressable, Text} from 'react-native';
import type {InputTextProps} from './input-text.props';

import styles from './input-text.styles';

function InputText({
  editable = true,
  multiline = false,
  hint = '',
  maxLength,
  autoCap,
  value = '',
  onChangeText,
  keyboardType = 'default',
  style = {},
  autoFocus,
  onSubmitEditing,
  selectionColor,
  placeholderTextColor,
  secureTextEntry,
  left,
  right,
  onKeyPress,
  rightTxtStyle,
  leftTxtStyle = {},
  onPress,
  inputStyle,
  pointerEvents = 'auto',
  textAlign = 'left',
  numberOfLines = 1,
}: InputTextProps) {
  const [isFocus, setIsFocus] = useState(false);

  const leftText = typeof left === 'string';
  const rightText = typeof right === 'string';

  return (
    <Pressable
      style={[
        styles.inputContainer,
        isFocus ? styles.borderHighlight : styles.inputContainer,
        style,
      ]}
      onPress={onPress}>
      {left &&
        (leftText ? (
          <Text style={[styles.fonts, leftTxtStyle]}>{left}</Text>
        ) : (
          left
        ))}
      <TextInput
        style={[styles.inputStyle, styles.fonts, inputStyle]}
        pointerEvents={pointerEvents}
        editable={editable}
        placeholder={hint}
        multiline={multiline}
        autoCapitalize={
          autoCap === null || autoCap === undefined ? 'none' : autoCap
        }
        allowFontScaling
        keyboardType={keyboardType}
        onChangeText={text => onChangeText!(text)}
        value={value}
        autoFocus={autoFocus}
        onSubmitEditing={onSubmitEditing}
        selectionColor={selectionColor}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        onKeyPress={onKeyPress}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        caretHidden={false}
        textAlign={textAlign}
        numberOfLines={numberOfLines}
        selection={{start: 0}}
      />
      {right &&
        (rightText ? (
          <Text style={[rightTxtStyle, styles.fonts]}>{right}</Text>
        ) : (
          right
        ))}
    </Pressable>
  );
}

export default InputText;
