import colors from '@/theme/colors';
import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  textStyling: {
    fontSize: 20,
    fontStyle: 'italic',
    color: 'black',
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 0.7,
    position: 'relative',
  },
  gridItem: {
    flex: 1,
    margin: 5,
    height: 194,
    backgroundColor: colors.black_10,
    borderRadius: 12,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  heartIcon: {
    position: 'absolute',
    top: 11,
    left: 7,
    zIndex: 99,
  },
  thumbnail: {
    height: '100%',
  },
  thumbnailView: {
    flex: 1,
    height: '100%',
  },
  addCartContainer: {
    flex: 0.3,
    paddingHorizontal: 11,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  addCartIcon: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: colors.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
