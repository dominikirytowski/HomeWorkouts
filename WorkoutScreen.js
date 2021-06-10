import 'react-native-gesture-handler';
//import 'react-native-reanimated';
import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import styles from './styles/styles';
import Toolbar from './Toolbar';
import YoutubePlayer from 'react-native-youtube-iframe';
import gifs from './Gifs';
import TRAININGSD from './trainingsDetails';

class WorkoutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
      route: this.props.route,
    };
  }
  render() {
    const navigation = this.state.navigation;
    const title = this.state.route.params.title;
    const training = this.state.route.params.training;

    return (
      <View style={styles.containerTraining}>
        {Toolbar(this.state.navigation, title)}
        <View style={styles.trainingTime}>
          <Text style={styles.timeText}>|</Text>
          <Text style={styles.timeText}>16 min</Text>
          <Text style={styles.timeText}>.</Text>
          <Text style={styles.timeText}>{training.exercises.length} exercises</Text>
        </View>
        <SafeAreaView style={styles.trainingExercises}>
          <ScrollView
            style={styles.scrollview}
            contentContainerStyle={styles.scrollContainerExercises}>
            <FlatList
              keyExtractor={item => item.id}
              data={training.exercises}
              renderItem={({item}) => (
                <View style={styles.exerciseItem}>
                  <View style={styles.imagePlaceHolder}>
                    <Image
                      source={{uri: item.gif}}
                      resizeMode="stretch"
                      style={styles.itemGif}
                    />
                  </View>
                  <View style={{flex: 3}}>
                    <Text style={styles.itemName}>{item.title}</Text>
                  </View>
                </View>
              )}
            />
          </ScrollView>
        </SafeAreaView>
        <View style={styles.trainingStart}>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => {
              navigation.navigate('Exercises', {
                training: training,
                index: 0,
                length: training.exercises.length,
              });
            }}>
            <Text style={styles.start}>START</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default WorkoutScreen;
