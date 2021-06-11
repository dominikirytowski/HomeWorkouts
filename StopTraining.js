import AsyncStorage from '@react-native-async-storage/async-storage';
import {DrawerActions} from '@react-navigation/native';
import {savePersonTraining} from './NetworkingImpl';
import ADMIN from './UserAdmin';

function StopTraining({navigation}, training) {
  /*let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = String(today.getFullYear()).padStart(2, '0');
  today = dd + '/' + mm + '/' + yyyy;

  console.log(today + ' ASDASFSAFA ' + training.id);

  let jsonValue = JSON.stringify({id: training.id, data: today});
  AsyncStorage.setItem('exc' + training.id, jsonValue);
*/
  savePersonTraining(ADMIN.id, training.id).then(r => {
    console.log('Status:' + r);
    navigation.dispatch(DrawerActions.closeDrawer());
    navigation.navigate('Summary', {
      title: 'Summary',
      training: training,
    });
  });
}

export default StopTraining;
