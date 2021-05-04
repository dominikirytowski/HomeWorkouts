import 'react-native-gesture-handler';
//import 'react-native-reanimated';
import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import Toolbar from './Toolbar';
import styles from './styles/styles';
import TRAININGS from "./trainingsGeneral";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {Toolbar(this.state.navigation, 'Home')}
        <SafeAreaView style={styles.safeArea}>
          <ScrollView
            style={styles.scrollview}
            contentContainerStyle={styles.scrollContainer}>
            <FlatList
              keyExtractor={item => item.id}
              data={TRAININGS}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    this.state.navigation.navigate(item.title, {
                      title: item.title,
                      exercisesId: item.id,
                    });
                  }}
                  style={styles.listItem}>
                  <Image source={item.img} style={styles.listImage} />
                  <Text style={styles.listTitle}>{item.title}</Text>
                  <Text style={styles.listLastTime}>
                    Ostatnio: kwi 30, 2021
                  </Text>
                  {/*Do zrobienia mechanizm sledzacy kiedy byl ostatni trening*/}
                </TouchableOpacity>
              )}
            />
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

export default HomeScreen;
