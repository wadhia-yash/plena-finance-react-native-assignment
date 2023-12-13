import colors from '@/theme/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badgeView: {
    position: 'absolute',
    top: -10,
    right: -7,
    backgroundColor: colors.secondary_dark,
    height: 25,
    width: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  cartView: {
    position: 'relative',
  },
});

export default styles;
