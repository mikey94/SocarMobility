import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  // fleet item styles
  itemWrapper: {
    display: 'flex',
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
    paddingRight: 10,
  },
  detailsText: {
    fontSize: 18,
    margin: 20,
  },
  priceText: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: '500',
  },
  activeCircle: {
    backgroundColor: Colors.green,
    borderRadius: 100,
    width: 10,
    height: 10,
    margin: 10,
  },
  activeStatusWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  deActiveBtn: {

  },
});

export default styles;
