import colors from '@/theme/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    backgroundColor: colors.black_1,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
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
  backButton: {
    backgroundColor: colors.black_10,
    height: 40,
    width: 40,
    borderRadius: 20,
    marginEnd: 20,
  },
});

export default styles;
