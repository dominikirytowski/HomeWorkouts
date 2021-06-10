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
import TRAININGS from './trainingsGeneral';
import {getTrainings, getExercises} from './Networking';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions} from '@react-navigation/native';

class HomeScreen extends Component {
  componentDidMount = () => {
    this.getTrainingsFromApi().then(r => this.setState({trainings: r}));
    this._retrieveData();
  };

  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
      trainings: [],
      dates: [],
    };
  }
  getTrainingsFromApi = async () => {
    return await getTrainings();
  };
  getExercisesFromApi = async id => {
    return await getExercises(id);
  };

  _retrieveData = async () => {
    try {
      let temp = this.state.dates;
      for (let i = 1; i <= TRAININGS; i++) {
        const value = await AsyncStorage.getItem('exc' + i);
        if (value !== null) {
          let json = JSON.parse(value);
          temp.push(json);
        }
      }
      this.setState({dates: temp});
    } catch (error) {
      alert(error);
    }
  };

  putLastData(id) {
    let temp = this.state.dates;
    for (let i = 0; i < temp.length; i++) {
      let item = temp[i];
      if (item.id === id) {
        return <Text>{item.data}</Text>;
      }
    }
    return <Text>No info</Text>;
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
              data={this.state.trainings}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    this.getExercisesFromApi(parseInt(item.id)).then(r =>
                      this.state.navigation.navigate(r.title, {
                        title: r.title,
                        training: r,
                      }),
                    );
                  }}
                  style={styles.listItem}>
                  {console.log(item.image)}
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    style={styles.listImage}
                    resizeMode={'cover'}
                  />
                  <Text style={styles.listTitle}>{item.title}</Text>
                  <Text style={styles.listLastTime}>
                    {this.putLastData(item.id)}
                  </Text>
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
