import {StyleSheet} from 'react-native';
import colors from '@/theme/colors';

const styles = StyleSheet.create({
  flat: {
    paddingVertical: 9,
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  raised: {
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    paddingVertical: 7,
  },
  back: {
    paddingVertical: 5,
    paddingHorizontal: 0,
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  iconBtnContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconBtnText: {
    marginTop: 8,
    color: colors.primary,
    textAlign: 'center',
  },
});

export default styles;
