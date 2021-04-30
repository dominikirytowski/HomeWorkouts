import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import CountDown from 'react-native-countdown-component';
import styles from './styles/styles';
import NextQuestion from './NextQuestion';

function ChangeExercise({navigation}, title, training, index, length) {
  const [key, setKey] = useState(0);
  const [run, setRun] = useState(false);
  const [start, setStart] = useState('START');
  useEffect(() => {}, []);
  let time = 10;
  if (training.exercises[index].time !== 0) {
    time = training.exercises[index].time;
  }
  return (
    <View style={styles.trainingExercises}>
      <View style={styles.exerciseClock}>
        {training.exercises[index].time === 0 ? (
          <View style={styles.repsTime}>
            <Text style={styles.reps}>Reps: </Text>
            <Text style={styles.reps}>{training.exercises[index].reps}</Text>
          </View>
        ) : (
          <CountDown
            id={key}
            until={time}
            size={30}
            onFinish={() => {
              setKey(prevKey => prevKey + 1);
              setRun(false);
              setStart('START');
              NextQuestion({navigation}, title, training, index, length);
            }}
            digitStyle={{backgroundColor: '#FFF'}}
            digitTxtStyle={{color: '#000'}}
            timeToShow={['S']}
            timeLabels={{s: ''}}
            running={run}
          />
        )}
      </View>
      <View style={styles.exerciseGifView}>
        <Image
          source={training.exercises[index].gif}
          resizeMode="stretch"
          style={styles.exerciseGif}
        />
      </View>
      <View style={styles.exerciseTitleView}>
        <Text style={styles.exerciseTitle}>{training.exercises[index].title}</Text>
      </View>
      <View style={styles.trainingStart}>
        {training.exercises[index].time === 0 ? (
          <TouchableOpacity
            style={[styles.startStopButton, styles.startStopBlue]}
            onPress={() => {
              if (run) {
                setRun(false);
                setStart('START');
              }
              NextQuestion({navigation}, title, training, index, length);
            }}>
            <Text style={styles.start}>NEXT EXERCISE</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[
              styles.startStopButton,
              run ? styles.startStopRed : styles.startStopBlue,
            ]}
            onPress={() => {
              if (run) {
                setRun(false);
                setStart('START');
              } else {
                setRun(true);
                setStart('STOP');
              }
            }}>
            <Text style={styles.start}>{start}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
export default ChangeExercise;
