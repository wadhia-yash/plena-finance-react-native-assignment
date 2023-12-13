import InputText from '@/components/atom/input-text/input-text';
import colors from '@/theme/colors';
import React, {FC} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import styles from './search-bar.styles';

const SearchBar: FC = () => {
  const searchIcon = () => (
    <Icon name="magnifier" size={18} color={colors.black_1} />
  );

  return (
    <View style={styles.container}>
      <InputText
        style={styles.phoneNumberInput}
        selectionColor={colors.secondary}
        hint="Search products or store"
        keyboardType="default"
        colors={colors.white}
        placeholderTextColor={colors.gray}
        maxLength={10}
        left={searchIcon()}
      />
    </View>
  );
};

export default SearchBar;
