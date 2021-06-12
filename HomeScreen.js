import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import Toolbar from './Toolbar';
import styles from './styles/styles';
import ADMIN from './UserAdmin';
import {
  getTrainings,
  getExercises,
  getPersonLastTraining,
} from './NetworkingImpl';
import AsyncStorage from '@react-native-async-storage/async-storage';

class HomeScreen extends Component {
  componentDidMount = () => {
    getTrainings().then(r => this.setState({trainings: r}));
    getPersonLastTraining(ADMIN.id).then(r => this.setState({last: r}));
  };

  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
      trainings: [],
      last: [],
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
              data={this.state.trainings}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    getExercises(parseInt(item.id)).then(r =>
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
                    {this.state.last.map(n => {
                      if (n.idTraining === item.id) {
                        return (
                          <Text>{n.day + '/' + n.month + '/' + n.year}</Text>
                        );
                      }
                    })}
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
