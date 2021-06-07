import 'react-native-gesture-handler';
//import 'react-native-reanimated';
import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import ChangeExercise from './ChangeExercise';
import Toolbar from './Toolbar';
import styles from './styles/styles';
import StopTraining from './StopTraining';

function ExercisesScreen({navigation, route}) {
  const training = route.params.training;
  const length = route.params.length;
  const index = route.params.index;

  return (
    <View style={styles.containerTraining}>
      {Toolbar(navigation, training.title)}
      <View style={styles.trainingExercises}>
        {length > index
          ? ChangeExercise(
              {navigation},
              training.title,
              training,
              index,
              length,
            )
          : StopTraining({navigation}, training.id)}
      </View>
    </View>
  );
}

export default ExercisesScreen;
