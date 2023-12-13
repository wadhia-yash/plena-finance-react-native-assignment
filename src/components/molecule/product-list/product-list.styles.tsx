import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 160,
    backgroundColor: 'red', // Placeholder background color
  },
  columnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth - 16, // Adjusted for margins
  },
});

export default styles;
