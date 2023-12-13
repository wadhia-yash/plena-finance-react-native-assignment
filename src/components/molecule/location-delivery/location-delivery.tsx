import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {BodyTwo, Label} from '@/components/atom/text/text';
import colors from '@/theme/colors';
import styles from './location-delivery.styles';

const LocationDevliery = () => (
  <View style={[styles.locationContainer, styles.rowContainer]}>
    <View>
      <Label family="bold" color={colors.black_45}>
        DELIVERY TO
      </Label>
      <View style={styles.row}>
        <BodyTwo color={colors.black_1}>Green Way 3000, Sylhet</BodyTwo>
        <Icon
          name="arrow-down"
          size={10}
          color={colors.black_45}
          style={styles.icon}
        />
      </View>
    </View>
    <View>
      <Label family="bold" color={colors.black_45}>
        WITHIN
      </Label>
      <View style={styles.row}>
        <BodyTwo color={colors.black_1}>1 hour</BodyTwo>
        <Icon
          name="arrow-down"
          size={10}
          color={colors.black_45}
          style={styles.icon}
        />
      </View>
    </View>
  </View>
);

export default LocationDevliery;
