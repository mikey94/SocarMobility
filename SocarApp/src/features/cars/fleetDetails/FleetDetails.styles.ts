import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: Colors.white,
  },
  detailWrapper: {
    display: 'flex',
    backgroundColor: Colors.white,
    flex: 1,
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
    padding: 10,
    justifyContent: 'space-between',
  },
  mainWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  brandText: {
    fontSize: 40,
    fontWeight: '500',
  },
  modelText: {
    fontSize: 25,
    fontWeight: '500',
  },
  milageText: {
    fontSize: 18,
    marginTop: 10,
  },
  detailsText: {
    fontSize: 18,
    marginTop: 20,
  },
  priceText: {
    fontSize: 20,
    fontWeight: '500',
  },
  rentBtn: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
});

export default styles;
