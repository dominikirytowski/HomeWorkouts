import AsyncStorage from '@react-native-async-storage/async-storage';
import {DrawerActions} from '@react-navigation/native';
import {savePersonTraining} from './NetworkingImpl';
import ADMIN from './UserAdmin';
import SummaryScreen from './SummaryScreen';

function StopTraining({navigation}, training, startTime) {
  /*let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = String(today.getFullYear()).padStart(2, '0');
  today = dd + '/' + mm + '/' + yyyy;

  console.log(today + ' ASDASFSAFA ' + training.id);

  let jsonValue = JSON.stringify({id: training.id, data: today});
  AsyncStorage.setItem('exc' + training.id, jsonValue);
*/
  const start = new Date(startTime);
  const end = new Date(new Date().getTime());
  const elapsedTime = new Date(end - start);
  console.log('ile czasu start:');
  console.log(start.toLocaleTimeString());
  console.log('ile czasu stop:');
  console.log(end.toLocaleTimeString());
  const elapsed = elapsedTime.toLocaleTimeString();
  console.log('ile czasu roznica:');
  console.log(elapsed);
  savePersonTraining(ADMIN.id, training.id).then(r => {
    console.log('Status:' + r);
    navigation.navigate('Summary', {
      training: training,
      elapsed: elapsed,
    });
  });
}

export default StopTraining;
