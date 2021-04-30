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

const TRAININGS = [
  {
    id: '1',
    title: 'Mięśnie brzucha',
    exercises: [
      {
        id: '1.1',
        title: 'Jumping jacks',
        time: 30,
        reps: 0,
        gif: gifs.stomach.jacks,
        video: 'iSSAk4XCsRA',
      },
      {
        id: '1.2',
        title: 'Abdominal crunches',
        time: 0,
        reps: 16,
        gif: gifs.stomach.crunches,
        video: '_YVhhXc2pSY',
      },
      {
        id: '1.3',
        title: 'Russian twist',
        time: 0,
        reps: 20,
        gif: gifs.stomach.russian,
        video: 'wkD8rjkodUI',
      },
      {
        id: '1.4',
        title: 'Mountain climber',
        time: 0,
        reps: 16,
        gif: gifs.stomach.climber,
        video: 'nmwgirgXLYM',
      },
      {
        id: '1.5',
        title: 'Heel touch',
        time: 0,
        reps: 20,
        gif: gifs.stomach.heel,
        video: 'fLajmFLpJ_w',
      },
      {
        id: '1.6',
        title: 'Leg raises',
        time: 0,
        reps: 16,
        gif: gifs.stomach.leg,
        video: 'JB2oyawG9KI',
      },
      {
        id: '1.7',
        title: 'Plank',
        time: 30,
        reps: 0,
        gif: gifs.stomach.plank,
        video: 'pSHjTRCQxIw',
      },
      {
        id: '1.8',
        title: 'V-ups',
        time: 0,
        reps: 12,
        gif: gifs.stomach.ups,
        video: 'iP2fjvG0g3w',
      },
      {
        id: '1.9',
        title: 'Plank',
        time: 30,
        reps: 0,
        gif: gifs.stomach.plank,
        video: 'pSHjTRCQxIw',
      },
      {
        id: '1.10',
        title: 'Abdominal crunches',
        time: 0,
        reps: 12,
        gif: gifs.stomach.crunches,
        video: 'Xyd_fa5zoEU',
      },
      {
        id: '1.11',
        title: 'Leg raises',
        time: 0,
        reps: 10,
        gif: gifs.stomach.leg,
        video: 'JB2oyawG9KI',
      },
      {
        id: '1.12',
        title: 'Heel touch',
        time: 0,
        reps: 16,
        gif: gifs.stomach.heel,
        video: 'fLajmFLpJ_w',
      },
      {
        id: '1.13',
        title: 'Side leg raises',
        time: 0,
        reps: 10,
        gif: gifs.stomach.side,
        video: 'jgh6sGwtTwk',
      },
      {
        id: '1.14',
        title: 'Cobra stretch',
        time: 30,
        reps: 0,
        gif: gifs.stomach.cobra,
        video: 'JDcdhTuycOI',
      },
      {
        id: '1.15',
        title: 'Spine lumbar twist stretch left',
        time: 30,
        reps: 0,
        gif: gifs.stomach.spine,
        video: 'BzYBkAvdCJY',
      },
      {
        id: '1.16',
        title: 'Spine lumbar twist stretch right',
        time: 30,
        reps: 0,
        gif: gifs.stomach.spine,
        video: 'BzYBkAvdCJY',
      },
    ],
    time: 16,
  },
  {
    id: '2',
    title: 'Klatka piersiowa',
    exercises: [
      {
        id: '2.1',
        title: 'Jumping jacks',
        time: 30,
        reps: 0,
        video: 'fLajmFLpJ_w',
      },
      {
        id: '2.2',
        title: 'Knee push-ups',
        time: 0,
        reps: 12,
        video: 'fLajmFLpJ_w',
      },
      {
        id: '2.3',
        title: 'push-ups',
        time: 0,
        reps: 12,
        video: 'fLajmFLpJ_w',
      },
      {
        id: '2.4',
        title: 'Wide arm push-ups',
        time: 0,
        reps: 16,
        video: 'fLajmFLpJ_w',
      },
      {
        id: '2.5',
        title: 'Hindu push-ups',
        time: 0,
        reps: 10,
        video: 'fLajmFLpJ_w',
      },
      {
        id: '2.6',
        title: 'Staggered push-ups',
        time: 0,
        reps: 12,
        video: 'fLajmFLpJ_w',
      },
      {
        id: '2.7',
        title: 'Push-up & rotation',
        time: 0,
        reps: 10,
        video: 'fLajmFLpJ_w',
      },
      {
        id: '2.8',
        title: 'Knee push-ups',
        time: 0,
        reps: 10,
        video: 'fLajmFLpJ_w',
      },
      {
        id: '2.9',
        title: 'Hindu push-ups',
        time: 0,
        reps: 10,
        video: 'fLajmFLpJ_w',
      },
      {
        id: '2.10',
        title: 'Decline push-ups',
        time: 0,
        reps: 12,
        video: 'fLajmFLpJ_w',
      },
      {
        id: '2.11',
        title: 'Staggered push-ups',
        time: 0,
        reps: 10,
        video: 'fLajmFLpJ_w',
      },
      {
        id: '2.12',
        title: 'Shoulder stretch',
        time: 30,
        reps: 0,
        video: 'fLajmFLpJ_w',
      },
      {
        id: '2.13',
        title: 'Cobra stretch',
        time: 30,
        reps: 0,
        video: 'fLajmFLpJ_w',
      },
      {
        id: '2.14',
        title: 'Chest stretch',
        time: 30,
        reps: 0,
        video: 'fLajmFLpJ_w',
      },
    ],
    time: 24,
  },
  /*
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Ramiona',
    exercises: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        time: 30,
        reps: 10,
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        time: 30,
        reps: 10,
      },
      {
        id: '581239aa0f-3da1-471f-bd96-145571e29d72',
        title: 'Fourth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '5869123a0f-3da1-471f-bd96-1451231e29d72',
        title: 'Fifth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a120f-3da1-47112f-bd96-141241e29d72',
        title: 'Sixth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '3ac68a321fc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Seventh Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a0f-3d1231-471f-bd96-145571e29d72',
        title: 'Eight Item',
        time: 30,
        reps: 10,
      },
      {
        id: '5812394234aa0f-3da1-471f-bd96-145571e29d72',
        title: 'Ninth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '5869123a0f-3da1-471f-bd96-14512312e23429d72',
        title: 'Tenth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a120f-3da1-47112f-bd96-141241e239d72',
        title: 'Eleventh Item',
        time: 30,
        reps: 10,
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53a8bb28ba',
        title: 'Twelfth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd591aa97f63',
        title: 'Thirteenth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '3ac68afc-c62131205-48d3-a1234f8-fbd591aa97f63',
        title: 'Fourteenth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a0f-3da1-471f-bd96-1455731e29d72',
        title: 'Fifteenth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '581239aa0f-3da1-471f-bd96-145571e229d72',
        title: 'Sixteenth Item',
        time: 30,
        reps: 10,
      },
    ],
  },
  {
    id: '581239aa0f-3da1-471f-bd96-145571e29d72',
    title: 'Nogi',
    exercises: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        time: 30,
        reps: 10,
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        time: 30,
        reps: 10,
      },
      {
        id: '581239aa0f-3da1-471f-bd96-145571e29d72',
        title: 'Fourth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '5869123a0f-3da1-471f-bd96-1451231e29d72',
        title: 'Fifth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a120f-3da1-47112f-bd96-141241e29d72',
        title: 'Sixth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '3ac68a321fc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Seventh Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a0f-3d1231-471f-bd96-145571e29d72',
        title: 'Eight Item',
        time: 30,
        reps: 10,
      },
      {
        id: '5812394234aa0f-3da1-471f-bd96-145571e29d72',
        title: 'Ninth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '5869123a0f-3da1-471f-bd96-14512312e23429d72',
        title: 'Tenth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a120f-3da1-47112f-bd96-141241e239d72',
        title: 'Eleventh Item',
        time: 30,
        reps: 10,
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53a8bb28ba',
        title: 'Twelfth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd591aa97f63',
        title: 'Thirteenth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '3ac68afc-c62131205-48d3-a1234f8-fbd591aa97f63',
        title: 'Fourteenth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a0f-3da1-471f-bd96-1455731e29d72',
        title: 'Fifteenth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '581239aa0f-3da1-471f-bd96-145571e229d72',
        title: 'Sixteenth Item',
        time: 30,
        reps: 10,
      },
    ],
  },
  {
    id: '5869123a0f-3da1-471f-bd96-1451231e29d72',
    title: 'Barki i plecy',
    exercises: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        time: 30,
        reps: 10,
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        time: 30,
        reps: 10,
      },
      {
        id: '581239aa0f-3da1-471f-bd96-145571e29d72',
        title: 'Fourth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '5869123a0f-3da1-471f-bd96-1451231e29d72',
        title: 'Fifth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a120f-3da1-47112f-bd96-141241e29d72',
        title: 'Sixth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '3ac68a321fc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Seventh Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a0f-3d1231-471f-bd96-145571e29d72',
        title: 'Eight Item',
        time: 30,
        reps: 10,
      },
      {
        id: '5812394234aa0f-3da1-471f-bd96-145571e29d72',
        title: 'Ninth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '5869123a0f-3da1-471f-bd96-14512312e23429d72',
        title: 'Tenth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a120f-3da1-47112f-bd96-141241e239d72',
        title: 'Eleventh Item',
        time: 30,
        reps: 10,
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53a8bb28ba',
        title: 'Twelfth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd591aa97f63',
        title: 'Thirteenth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '3ac68afc-c62131205-48d3-a1234f8-fbd591aa97f63',
        title: 'Fourteenth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '58694a0f-3da1-471f-bd96-1455731e29d72',
        title: 'Fifteenth Item',
        time: 30,
        reps: 10,
      },
      {
        id: '581239aa0f-3da1-471f-bd96-145571e229d72',
        title: 'Sixteenth Item',
        time: 30,
        reps: 10,
      },
    ],
  },*/
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
    const exercisesId = this.state.route.params.exercisesId;
    let training = {};
    TRAININGS.forEach(item => {
      if (item.id === exercisesId) {
        training = item;
      }
    });
    return (
      <View style={styles.containerTraining}>
        {Toolbar(this.state.navigation, title)}
        <View style={styles.trainingTime}>
          <Text style={styles.timeText}>|</Text>
          <Text style={styles.timeText}>{training.time} min</Text>
          <Text style={styles.timeText}>.</Text>
          <Text style={styles.timeText}>
            {training.exercises.length} exercises
          </Text>
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
                      source={item.gif}
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
