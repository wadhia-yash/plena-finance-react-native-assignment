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
  row: {
    display: 'flex',
    flexDirection: 'row',
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
  productThumbnail: {
    height: 50,
    width: 50,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 10,
  },
  counterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterButton: {
    backgroundColor: colors.black_10,
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  quantity: {
    marginHorizontal: 7,
  },
});

export default styles;
