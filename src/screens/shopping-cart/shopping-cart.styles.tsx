import colors from '@/theme/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black_1,
  },
  listContainer: {
    flex: 0.7,
  },
  checkoutContainer: {
    flex: 0.3,
    paddingHorizontal: 8,
  },
  checkoutInnerContainer: {
    backgroundColor: colors.black_10,
    flex: 1,
    borderRadius: 30,
    paddingHorizontal: 40,
    paddingTop: 16,
    position: 'relative',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  amountContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  checkoutButton: {
    marginTop: 20,
  },
  productItem: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginHorizontal: 16,
  },
});

export default styles;
