import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import CountDown from 'react-native-countdown-component';
import styles from './styles/styles_toolbar';
import NextExercise from './NextExercise';

function ChangeExercise(navigation, title, training, index, length) {
  const [key, setKey] = useState(0);
  const [run, setRun] = useState(true);
  useEffect(() => {
    setRun(true);
    return () => {
      setRun(false);
    };
  }, []);

  let indexL = index;
  //const exercises = training.exercises;
  let time = 20;
  if (training.exercises[index].time !== 0) {
    time = training.exercises[index].time;
  }
  return (
    <View style={styles.toolbar}>
      <CountDown
        id={key}
        until={time}
        size={30}
        onFinish={() => {
          setKey(prevKey => prevKey + 1);
          NextExercise(navigation, training, indexL + 1, length);
        }}
        digitStyle={{backgroundColor: '#FFF'}}
        digitTxtStyle={{color: '#000'}}
        timeToShow={['S']}
        timeLabels={{s: ''}}
        running={run}
      />
      <View style={styles.flex2} />
      <Text style={styles.toolbarTitle}>{training.exercises[index].title}</Text>
      <View style={styles.flex3} />

      <View style={styles.flex2} />
      <Text style={styles.toolbarTitle}>{training.exercises[index].time}</Text>
      <View style={styles.flex3} />

      <View style={styles.flex2} />
      <Text style={styles.toolbarTitle}>{training.exercises[index].reps}</Text>
      <View style={styles.flex3} />
    </View>
  );
}
export default ChangeExercise;
