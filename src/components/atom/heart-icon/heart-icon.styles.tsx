import colors from '@/theme/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  heart: {
    width: 24,
    height: 24,
    backgroundColor: 'transparent',
  },
  heartShape: {
    width: 9.5,
    height: 16,
    position: 'absolute',
    top: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  filledHeart: {
    backgroundColor: colors.heart_filled,
  },
  fit: {
    transform: [{scale: 0.9}],
  },
  emptyFill: {
    backgroundColor: colors.black_10,
  },
  empty: {
    backgroundColor: colors.black_100,
  },
  leftHeart: {
    transform: [{rotate: '-45deg'}],
    left: 5,
    backgroundColor: colors.heart_filled,
  },
  rightHeart: {
    transform: [{rotate: '45deg'}],
    right: 5,
    backgroundColor: colors.heart_filled,
  },
});

export default styles;
