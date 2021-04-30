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

const TRAININGS = [
  {
    id: '1',
    title: 'Mięśnie brzucha',
    img: require('./imgs/abs.jpg'),
  },
  {
    id: '2',
    title: 'Klatka piersiowa',
    img: require('./imgs/chest.jpg'),
  },
  {
    id: '4',
    title: 'Ramiona',
    img: require('./imgs/biceps.jpg'),
  },
  {
    id: '5',
    title: 'Nogi',
    img: require('./imgs/legs.jpg'),
  },
  {
    id: '6',
    title: 'Barki i plecy',
    img: require('./imgs/back.jpg'),
  },
];

const EXERCISES = [
  {
    id: '1',
    title: 'Mięśnie brzucha',
    exercises: [
      {
        id: '1.1',
        title: 'Jumping jacks',
        time: 30,
        reps: 0,
        video: 'iSSAk4XCsRA',
      },
      {
        id: '1.2',
        title: 'Abdominal crunches',
        time: 0,
        reps: 16,
        video: '_YVhhXc2pSY',
      },
      {
        id: '1.3',
        title: 'Russian twist',
        time: 0,
        reps: 20,
        video: 'wkD8rjkodUI',
      },
      {
        id: '1.4',
        title: 'Mountain climber',
        time: 0,
        reps: 16,
        video: 'nmwgirgXLYM',
      },
      {
        id: '1.5',
        title: 'Heel touch',
        time: 0,
        reps: 20,
        video: 'fLajmFLpJ_w',
      },
      {
        id: '1.6',
        title: 'Leg raises',
        time: 0,
        reps: 16,
        video: 'JB2oyawG9KI',
      },
      {
        id: '1.7',
        title: 'Plank',
        time: 30,
        reps: 0,
        video: 'pSHjTRCQxIw',
      },
      {
        id: '1.8',
        title: 'V-ups',
        time: 0,
        reps: 12,
        video: 'iP2fjvG0g3w',
      },
      {
        id: '1.9',
        title: 'Plank',
        time: 30,
        reps: 0,
        video: 'pSHjTRCQxIw',
      },
      {
        id: '1.10',
        title: 'Abdominal crunches',
        time: 0,
        reps: 12,
        video: 'Xyd_fa5zoEU',
      },
      {
        id: '1.11',
        title: 'Leg raises',
        time: 0,
        reps: 10,
        video: 'JB2oyawG9KI',
      },
      {
        id: '1.12',
        title: 'Heel touch',
        time: 0,
        reps: 16,
        video: 'fLajmFLpJ_w',
      },
      {
        id: '1.13',
        title: 'Side leg raises',
        time: 0,
        reps: 10,
        video: 'jgh6sGwtTwk',
      },
      {
        id: '1.14',
        title: 'Cobra stretch',
        time: 30,
        reps: 0,
        video: 'JDcdhTuycOI',
      },
      {
        id: '1.15',
        title: 'Spine lumbar twist stretch left',
        time: 30,
        reps: 0,
        video: 'BzYBkAvdCJY',
      },
      {
        id: '1.16',
        title: 'Spine lumbar twist stretch right',
        time: 30,
        reps: 0,
        video: 'BzYBkAvdCJY',
      },
    ],
  },
  {
    id: '2',
    title: 'Klatka piersiowa',
    exercises: [
      {
        id: '2.1',
        title: 'Jumping jacks',
        time: 30,
        reps: 0,
      },
      {
        id: '2.2',
        title: 'Knee push-ups',
        time: 0,
        reps: 12,
      },
      {
        id: '2.3',
        title: 'push-ups',
        time: 0,
        reps: 12,
      },
      {
        id: '2.4',
        title: 'Wide arm push-ups',
        time: 0,
        reps: 16,
      },
      {
        id: '2.5',
        title: 'Hindu push-ups',
        time: 0,
        reps: 10,
      },
      {
        id: '2.5',
        title: 'Staggered push-ups',
        time: 0,
        reps: 12,
      },
      {
        id: '2.6',
        title: 'Push-up & rotation',
        time: 0,
        reps: 10,
      },
      {
        id: '2.7',
        title: 'Knee push-ups',
        time: 0,
        reps: 10,
      },
      {
        id: '2.8',
        title: 'Hindu push-ups',
        time: 0,
        reps: 10,
      },
      {
        id: '2.9',
        title: 'Decline push-ups',
        time: 0,
        reps: 12,
      },
      {
        id: '2.10',
        title: 'Staggered push-ups',
        time: 0,
        reps: 10,
      },
      {
        id: '2.11',
        title: 'Shoulder stretch',
        time: 30,
        reps: 0,
      },
      {
        id: '2.12',
        title: 'Cobra stretch',
        time: 30,
        reps: 0,
      },
      {
        id: '2.13',
        title: 'Chest stretch',
        time: 30,
        reps: 0,
      },
    ],
  },
  /*
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Ramiona',
    exercises: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        time: 30,
        reps: 10,
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        time: 30,
        reps: 10,
      },
      {
        id: '581239aa0f-3da1-471f-bd96-145571e29d72',
        title: 'Fourth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '5869123a0f-3da1-471f-bd96-1451231e29d72',
        title: 'Fifth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a120f-3da1-47112f-bd96-141241e29d72',
        title: 'Sixth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '3ac68a321fc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Seventh Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a0f-3d1231-471f-bd96-145571e29d72',
        title: 'Eight Item',
        time: 30,
        reps: 10,
      },
      {
        id: '5812394234aa0f-3da1-471f-bd96-145571e29d72',
        title: 'Ninth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '5869123a0f-3da1-471f-bd96-14512312e23429d72',
        title: 'Tenth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a120f-3da1-47112f-bd96-141241e239d72',
        title: 'Eleventh Item',
        time: 30,
        reps: 10,
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53a8bb28ba',
        title: 'Twelfth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd591aa97f63',
        title: 'Thirteenth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '3ac68afc-c62131205-48d3-a1234f8-fbd591aa97f63',
        title: 'Fourteenth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a0f-3da1-471f-bd96-1455731e29d72',
        title: 'Fifteenth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '581239aa0f-3da1-471f-bd96-145571e229d72',
        title: 'Sixteenth Item',
        time: 30,
        reps: 10,
      },
    ],
  },
  {
    id: '581239aa0f-3da1-471f-bd96-145571e29d72',
    title: 'Nogi',
    exercises: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        time: 30,
        reps: 10,
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        time: 30,
        reps: 10,
      },
      {
        id: '581239aa0f-3da1-471f-bd96-145571e29d72',
        title: 'Fourth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '5869123a0f-3da1-471f-bd96-1451231e29d72',
        title: 'Fifth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a120f-3da1-47112f-bd96-141241e29d72',
        title: 'Sixth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '3ac68a321fc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Seventh Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a0f-3d1231-471f-bd96-145571e29d72',
        title: 'Eight Item',
        time: 30,
        reps: 10,
      },
      {
        id: '5812394234aa0f-3da1-471f-bd96-145571e29d72',
        title: 'Ninth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '5869123a0f-3da1-471f-bd96-14512312e23429d72',
        title: 'Tenth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a120f-3da1-47112f-bd96-141241e239d72',
        title: 'Eleventh Item',
        time: 30,
        reps: 10,
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53a8bb28ba',
        title: 'Twelfth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd591aa97f63',
        title: 'Thirteenth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '3ac68afc-c62131205-48d3-a1234f8-fbd591aa97f63',
        title: 'Fourteenth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a0f-3da1-471f-bd96-1455731e29d72',
        title: 'Fifteenth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '581239aa0f-3da1-471f-bd96-145571e229d72',
        title: 'Sixteenth Item',
        time: 30,
        reps: 10,
      },
    ],
  },
  {
    id: '5869123a0f-3da1-471f-bd96-1451231e29d72',
    title: 'Barki i plecy',
    exercises: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        time: 30,
        reps: 10,
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        time: 30,
        reps: 10,
      },
      {
        id: '581239aa0f-3da1-471f-bd96-145571e29d72',
        title: 'Fourth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '5869123a0f-3da1-471f-bd96-1451231e29d72',
        title: 'Fifth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a120f-3da1-47112f-bd96-141241e29d72',
        title: 'Sixth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '3ac68a321fc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Seventh Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a0f-3d1231-471f-bd96-145571e29d72',
        title: 'Eight Item',
        time: 30,
        reps: 10,
      },
      {
        id: '5812394234aa0f-3da1-471f-bd96-145571e29d72',
        title: 'Ninth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '5869123a0f-3da1-471f-bd96-14512312e23429d72',
        title: 'Tenth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a120f-3da1-47112f-bd96-141241e239d72',
        title: 'Eleventh Item',
        time: 30,
        reps: 10,
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53a8bb28ba',
        title: 'Twelfth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd591aa97f63',
        title: 'Thirteenth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '3ac68afc-c62131205-48d3-a1234f8-fbd591aa97f63',
        title: 'Fourteenth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a0f-3da1-471f-bd96-1455731e29d72',
        title: 'Fifteenth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '581239aa0f-3da1-471f-bd96-145571e229d72',
        title: 'Sixteenth Item',
        time: 30,
        reps: 10,
      },
    ],
  },*/
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
          {TRAININGS.map(n => (
            <Drawer.Screen name={n.title} component={WorkoutScreen} />
          ))}
          <Drawer.Screen name="Exercises" component={ExercisesScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
