import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';

function NextExercise(navigation, parTraining, index, length) {
  const training = parTraining;
  console.log(training);
  if (index < length) {
    navigation.navigate('Exercises', {
      training: training,
      index: 0,
    });
  } else {
    navigation.navigate('Home');
  }
}
export default NextExercise;
