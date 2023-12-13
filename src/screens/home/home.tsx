import React, {FC} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SearchBar from '@/components/molecule/search-bar/search-bar';

import styles from './home.styles';
import LocationDevliery from '@/components/molecule/location-delivery/location-delivery';

const HomeScreen: FC = () => {
  const {navigate} = useNavigation();

  return (
    <View>
      <SearchBar />
      <LocationDevliery />
    </View>
  );
};

export default HomeScreen;
