import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  drawerSection: {
    paddingBottom: 10,
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  drawerImage: {
    height: 100,
    width: 120,
    alignSelf: 'center',
    resizeMode: 'stretch',
  },
  drawerScroll: {
    backgroundColor: '#09A62B',
    color: 'red',
    borderColor: 'black',
    borderWidth: 1,
  },
  drawerTitle: {
    fontSize: 32,
    alignSelf: 'center',
    margin: 10,
  },
  drawerOption: {
    backgroundColor: '#009791',
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
