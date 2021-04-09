import 'react-native-gesture-handler';
//import 'react-native-reanimated';
import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import ChangeExercise from './ChangeExercise';
import Toolbar from './Toolbar';
import styles from './styles/styles';
import NextExercise from './NextExercise';

function ExercisesScreen({navigation, route}) {
  const training = route.params.training;
  const length = route.params.length;
  //console.log(exercises.exercises[1]);
  const index = route.params.index;
  //console.log(index);
  const start = 'START';
  const stop = 'STOP';
  return (
    <View style={styles.containerTraining}>
      {Toolbar(navigation, training.title)}
      <View style={styles.trainingExercises}>
        {ChangeExercise(navigation, training, index, length)}
      </View>
      <View style={styles.trainingStart} />
    </View>
  );
}

export default ExercisesScreen;
