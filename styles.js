import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    width: '100%',
  },
  listItem: {
    flex: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'lightyellow',
    width: 300,
    height: 100,
    marginVertical: 5,
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
