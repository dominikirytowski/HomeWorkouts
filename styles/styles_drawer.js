import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  drawerSection: {
    paddingBottom: 10,
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  drawerImage: {
    height: 200,
    width: '100%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  drawerScroll: {
    backgroundColor: 'lightgrey',
    color: 'red',
    borderColor: 'black',
    borderWidth: 1,
  },
  drawerTitle: {
    fontSize: 32,
    alignSelf: 'center',
  },
  drawerOption: {
    backgroundColor: 'grey',
    alignItems: 'center',
    paddingLeft: 20,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 7,
    margin: 10,
    marginBottom: 0,
    height: 50,
  },
});

export default styles;
