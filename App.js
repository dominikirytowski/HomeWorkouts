/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
//import 'react-native-reanimated';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawerContent from './CustomDrawerContent';
import HomeScreen from './HomeScreen';
import WorkoutScreen from './WorkoutScreen';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '581239aa0f-3da1-471f-bd96-145571e29d72',
    title: 'Fourth Item',
  },
  {
    id: '5869123a0f-3da1-471f-bd96-1451231e29d72',
    title: 'Fifth Item',
  },
  {
    id: '58694a120f-3da1-47112f-bd96-141241e29d72',
    title: 'Sixth Item',
  },
];

const Drawer = createDrawerNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          {DATA.map(n => (
            <Drawer.Screen name={n.title} component={WorkoutScreen} />
          ))}
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
