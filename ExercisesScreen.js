import 'react-native-gesture-handler';
//import 'react-native-reanimated';
import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import Toolbar from './Toolbar';
import styles from './styles/styles';

class ExercisesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
      route: this.props.route,
    };
  }
  render() {
    const navigation = this.state.navigation;
    const DATA = this.state.route.params.exercises;
    const title = this.state.route.params.title;
    const start = 'START';
    const stop = 'STOP';
    return (
      <View style={styles.containerTraining}>
        {Toolbar(this.state.navigation, title)}
        <View style={styles.trainingExercises}>
          <Text>Exercise 1</Text>
        </View>
        <View style={styles.trainingStart}>
          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.start}>{start}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ExercisesScreen;
