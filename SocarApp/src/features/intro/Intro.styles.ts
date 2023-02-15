import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  title: {
    color: Colors.white,
    fontSize: 30,
    fontWeight: '800',
  },
  button: {
    borderRadius: 10,
    marginTop: 10,
    width: 80,
  },
});

export default styles;
