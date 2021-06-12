import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import styles from './styles/styles';

function SummaryScreen({navigation, route}) {
  const training = route.params.training;
  const elapsed = route.params.elapsed;
  const showTime = () => {
    let hours = parseInt(elapsed.substring(0, 2));
    let minutes = parseInt(elapsed.substring(3, 5));
    let seconds = parseInt(elapsed.substring(6, 8));
    console.log('hours: ' + hours);
    console.log('minutes: ' + minutes);
    console.log('seconds: ' + seconds);

    let time = '';
    hours !== 0 ? (time += hours + ' hours, ') : (time += '');
    minutes !== 0 ? (time += minutes + ' minutes, ') : (time += '');
    seconds !== 0 ? (time += seconds + ' seconds') : (time += '');

    return time;
  };

  return (
    <View style={styles.containerTraining}>
      <View style={styles.container}>
        <Image
          style={styles.icon}
          source={{
            uri: 'https://img.icons8.com/color/70/000000/facebook-like.png',
          }}
        />
        <Text style={styles.title}>Congratulations</Text>
        <Text style={styles.description}>
          You finished {training.title} training in {showTime()}
        </Text>
        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default SummaryScreen;
