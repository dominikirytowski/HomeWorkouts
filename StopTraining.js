import {savePersonTraining} from './NetworkingImpl';
import ADMIN from './UserAdmin';

function StopTraining({navigation}, training, startTime) {
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
