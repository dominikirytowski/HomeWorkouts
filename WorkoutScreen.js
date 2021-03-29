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
} from 'react-native';
import styles from './styles';
import Toolbar from './Toolbar';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '581239aa0f-3da1-471f-bd96-145571e29d72',
    title: 'Fourth Item',
  },
  {
    id: '5869123a0f-3da1-471f-bd96-1451231e29d72',
    title: 'Fifth Item',
  },
  {
    id: '58694a120f-3da1-47112f-bd96-141241e29d72',
    title: 'Sixth Item',
  },
  {
    id: '3ac68a321fc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Seventh Item',
  },
  {
    id: '58694a0f-3d1231-471f-bd96-145571e29d72',
    title: 'Eight Item',
  },
  {
    id: '5812394234aa0f-3da1-471f-bd96-145571e29d72',
    title: 'Ninth Item',
  },
  {
    id: '5869123a0f-3da1-471f-bd96-14512312e23429d72',
    title: 'Tenth Item',
  },
  {
    id: '58694a120f-3da1-47112f-bd96-141241e239d72',
    title: 'Eleventh Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53a8bb28ba',
    title: 'Twelfth Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd591aa97f63',
    title: 'Thirteenth Item',
  },
  {
    id: '3ac68afc-c62131205-48d3-a1234f8-fbd591aa97f63',
    title: 'Fourteenth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455731e29d72',
    title: 'Fifteenth Item',
  },
  {
    id: '581239aa0f-3da1-471f-bd96-145571e229d72',
    title: 'Sixteenth Item',
  },
];

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
    return (
      <View style={styles.containerTraining}>
        {Toolbar(this.state.navigation, title)}
        <View style={styles.trainingTime}>
          <Text style={styles.timeText}>|</Text>
          <Text style={styles.timeText}>20 min</Text>
          <Text style={styles.timeText}>.</Text>
          <Text style={styles.timeText}>16 exercises</Text>
        </View>
        <SafeAreaView style={styles.trainingExercises}>
          <ScrollView
            style={styles.scrollview}
            contentContainerStyle={styles.scrollContainerExercises}>
            <FlatList
              keyExtractor={item => item.id}
              data={DATA}
              renderItem={({item}) => (
                <View style={styles.exerciseItem}>
                  <Text>{item.title}</Text>
                </View>
              )}
            />
          </ScrollView>
        </SafeAreaView>
        <View style={styles.trainingStart}>
          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.start}>START</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default WorkoutScreen;
