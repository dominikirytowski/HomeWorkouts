import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import CountDown from 'react-native-countdown-component';
import styles from './styles/styles';
import NextExercise from './NextExercise';
import PrevExercise from './PrevExercise';

function ChangeExercise({navigation}, training, index, length) {
  const [key, setKey] = useState(0);
  const [run, setRun] = useState(false);
  const [start, setStart] = useState('START');

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
              NextExercise({navigation}, training, index, length);
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
          source={{
            uri: training.exercises[index].gif,
          }}
          resizeMode="contain"
          style={styles.exerciseGif}
        />
        {console.log(training.exercises[index].gif)}
      </View>
      <View style={styles.exerciseTitleView}>
        <Text style={styles.exerciseTitle}>
          {training.exercises[index].title}
        </Text>
      </View>
      <View style={styles.trainingStart}>
        <TouchableOpacity
          style={styles.prevNextButtons}
          onPress={() => {
            if (run) {
              setRun(false);
              setStart('START');
            }
            PrevExercise({navigation}, training, index, length);
          }}>
          <Image
            style={styles.goBackImage}
            source={require('./imgs/ff_button.png')}
          />
          <Text style={styles.prevNextText}>Go back</Text>
        </TouchableOpacity>
        {training.exercises[index].time === 0 ? (
          <TouchableOpacity
            style={[styles.startStopButton, styles.startStopBlue]}
            onPress={() => {
              if (run) {
                setRun(false);
                setStart('START');
              }
              NextExercise({navigation}, training, index, length);
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
        <TouchableOpacity
          style={styles.prevNextButtons}
          onPress={() => {
            if (run) {
              setRun(false);
              setStart('START');
            }
            NextExercise({navigation}, training, index, length);
          }}>
          <Text style={styles.prevNextText}>Skip</Text>
          <Image
            style={styles.fastForwardImage}
            source={require('./imgs/ff_button.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default ChangeExercise;
