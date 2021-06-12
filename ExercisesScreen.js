import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';

import ChangeExercise from './ChangeExercise';
import Toolbar from './Toolbar';
import styles from './styles/styles';
import StopTraining from './StopTraining';

function ExercisesScreen({navigation, route}) {
  const training = route.params.training;
  const length = route.params.length;
  const index = route.params.index;
  const startTime = route.params.start;
  /*const [bounceValue, setBounceValue] = useState(-300);
  const [buttonText, setButtonText] = useState('Show Help');
  const [isHidden, setIsHidden] = useState(false);

  function toggleSubView() {
    !isHidden ? setButtonText('Show Help') : setButtonText('Hide Help');

    if (!isHidden) {
      console.log('Show');
      setBounceValue(-300);
      setIsHidden(true);
    }

    if (isHidden) {
      console.log('Hide');
      setBounceValue(0);
      setIsHidden(false);
    }
  }*/

  return (
    <View style={styles.containerTraining}>
      {Toolbar(navigation, training.title)}
      {/*<TouchableOpacity
        style={styles.buttonAnim}
        onPress={() => {
          toggleSubView();
        }}>
        <Text style={styles.buttonTextAnim}>{buttonText}</Text>
      </TouchableOpacity>
      <View style={[styles.subView, {transform: [{translateY: bounceValue}]}]}>
        <Text>This is a sub view</Text>
      </View>*/}
      <View style={styles.trainingExercises}>
        {length > index
          ? ChangeExercise(
              {navigation},
              training.title,
              training,
              index,
              length,
            )
          : StopTraining({navigation}, training, startTime)}
      </View>
    </View>
  );
}

export default ExercisesScreen;
