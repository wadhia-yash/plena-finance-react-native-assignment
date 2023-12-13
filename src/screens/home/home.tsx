import React, {FC} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './home.styles';

const HomeScreen: FC = () => {
  const {navigate} = useNavigation();

  const handleNavigation = () => {
    navigate('ProducDetails');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigation} />
  );
};

export default HomeScreen;
