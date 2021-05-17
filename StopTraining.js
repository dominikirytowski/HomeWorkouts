import AsyncStorage from "@react-native-async-storage/async-storage";
import {DrawerActions} from "@react-navigation/native";

function StopTraining({navigation},id) {

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  today = dd + '/' + mm ;

  console.log(today + " ASDASFSAFA " + id);


  let jsonValue = JSON.stringify({id: id, data: today})
  AsyncStorage.setItem(
      'exc' + id,
      jsonValue
  );

  navigation.dispatch(DrawerActions.closeDrawer())
  navigation.navigate("Home");

}
export default StopTraining;
