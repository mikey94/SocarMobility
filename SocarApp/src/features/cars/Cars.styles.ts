import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: Colors.primary,
  },
  button: {
    borderRadius: 10,
    marginTop: 10,
    width: '60%',
    alignSelf: 'flex-end',
    margin: 5,
  },
  tabWrapper: {
    display: 'flex',
    flex: 1,
    marginTop: 5,
  },
  tab: {
    height: 4,
    backgroundColor: Colors.white,
  },
  tabItem: {
    color: Colors.white,
    fontWeight: '600',
  },
});

export default styles;
