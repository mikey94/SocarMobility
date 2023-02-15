import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  itemWrapper: {
    height: 160,
    margin: 10,
    padding: 10,
    alignItems: 'flex-end',
  },
  brandText: {
    fontSize: 30,
    color: Colors.white,
    fontWeight: '800',
    zIndex: 100,
  },
  modelText: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: '800',
    zIndex: 100,
  },
  priceText: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: '500',
    color: Colors.white,
    zIndex: 100,
  },
  overlay: {
    position: 'absolute',
    zIndex: 10,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: Colors.black,
    opacity: 0.4,
  },
});

export default styles;
