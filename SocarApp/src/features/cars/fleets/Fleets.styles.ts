import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  // fleet item styles
  itemWrapper: {
    margin: 20,
    backgroundColor: Colors.white,
  },
  imageWrapper: {
    padding: 10,
  },
  itemImage: {
    height: 200,
    width: '100%',
  },
  detailsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  brandText: {
    fontSize: 30,
  },
  modelText: {
    fontSize: 18,
  },
  moreBtn: {
    paddingRight: 0,
  },
});

export default styles;
