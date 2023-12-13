import {StyleSheet} from 'react-native';
import colors from '@/theme/colors';

const styles = StyleSheet.create({
  flat: {
    paddingVertical: 9,
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.primary,
    height: 56,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  raised: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    paddingVertical: 7,
    height: 56,
  },
  iconButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBtnText: {
    marginTop: 8,
    color: colors.primary,
    textAlign: 'center',
  },
});

export default styles;
