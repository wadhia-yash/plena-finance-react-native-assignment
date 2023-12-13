import colors from '@/theme/colors';
import fonts from '@/theme/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    minHeight: 56,
    borderRadius: 99,
    backgroundColor: colors.primary_dark,
    paddingStart: 20,
  },
  countryCode: {
    fontSize: 14,
    letterSpacing: 0,
  },
  inputStyle: {
    flex: 1,
    fontSize: 14,
    letterSpacing: 0,
    paddingVertical: 0, // imp style for android
    fontStyle: 'normal',
    marginLeft: 10,
  },
  borderHighlight: {
    borderWidth: 0.7,
    borderStyle: 'solid',
    borderColor: colors.black_1,
  },
  fonts: {
    fontFamily: fonts.regular,
    color: colors.white,
  },
});

export default styles;
