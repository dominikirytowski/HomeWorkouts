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
import ExercisesScreen from './ExercisesScreen';
import SummaryScreen from './SummaryScreen';
import TRAININGS from './trainingsGeneral';

const Drawer = createDrawerNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          {TRAININGS.map(n => (
            <Drawer.Screen name={n.title} component={WorkoutScreen} />
          ))}
          <Drawer.Screen name="Exercises" component={ExercisesScreen} />
          <Drawer.Screen name="Summary" component={SummaryScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
