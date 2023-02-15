import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  title: {
    color: Colors.white,
    fontSize: 30,
    fontWeight: '600',
  },
  options: {
    display: 'flex',
    flex: 1,
    marginTop: 20,
    width: '80%',
  },
  listContent: {
    backgroundColor: 'transparent',
  },
  listItemText: {
    color: Colors.white,
  },
});

export default styles;
