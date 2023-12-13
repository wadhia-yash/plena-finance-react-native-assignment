import colors from '@/theme/colors';
import fonts from '@/theme/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
  },
  phoneNumberInput: {
    fontFamily: fonts.regular,
    marginBottom: 16,
  },
  button: {
    color: colors.secondary,
    fontFamily: fonts.bold,
  },
});

export default styles;
