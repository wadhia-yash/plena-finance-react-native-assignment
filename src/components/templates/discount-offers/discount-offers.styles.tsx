import {StyleSheet, Dimensions} from 'react-native';
import colors from '@/theme/colors';

const CARD_HEIGHT = 123;
const CARD_WIDTH = Dimensions.get('window').width * 0.7;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 21,
  },
  cardStyle: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: colors.secondary_dark,
    marginHorizontal: 5,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  offerCardContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  imageCardContainer: {
    flex: 0.7,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
