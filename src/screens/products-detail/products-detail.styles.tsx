import colors from '@/theme/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: colors.black_1,
  },
  container: {
    backgroundColor: colors.black_1,
    paddingBottom: 20,
  },
  headerView: {
    paddingHorizontal: 20,
  },
  rating: {
    backgroundColor: colors.black_1,
    display: 'flex',
    alignItems: 'flex-start',
    marginRight: 7,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    width: '100%',
    height: 200,
  },
  carouselContainer: {
    height: 200,
    position: 'relative',
  },
  dotsContainer: {
    position: 'absolute',
    bottom: -20,
    left: -10,
  },
  dots: {
    height: 4,
    width: 20,
    borderRadius: 5,
    backgroundColor: colors.secondary_dark,
  },
  inActiveDots: {
    backgroundColor: colors.black_10,
  },
  favIcon: {
    position: 'absolute',
    top: 7,
    right: 20,
    height: 45,
    width: 45,
    borderRadius: 10,
    backgroundColor: colors.black_1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionContainer: {
    padding: 20,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  buttonFlex: {
    flex: 0.47,
  },
  discountBadge: {
    backgroundColor: colors.primary,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft: 11,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
