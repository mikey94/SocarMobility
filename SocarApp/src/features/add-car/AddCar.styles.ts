import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  formWrapper: {
    display: 'flex',
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
  },
  input: {
    height: 60,
    width: '90%',
    backgroundColor: Colors.primary,
    color: Colors.white,
    margin: 10,
    paddingLeft: 20,
  },
  multilineInput: {
    height: 120,
    width: '90%',
    backgroundColor: Colors.primary,
    color: Colors.white,
    margin: 10,
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20,
  },
  errorText: {
    alignSelf: 'flex-start',
    margin: 20,
    color: Colors.red,
  },
});

export default styles;
