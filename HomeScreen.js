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
import {getTrainings} from './Networking';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions} from '@react-navigation/native';

class HomeScreen extends Component {
  componentDidMount = () => {
    this._retrieveData();
    this.getTrainingsFromApi().then(r => this.setState({trainings: r}));
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

  _retrieveData = async () => {
    try {
      let temp = this.state.dates;
      for (let i = 1; i <= TRAININGS.length; i++) {
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
                    this.state.navigation.navigate(item.title, {
                      title: item.title,
                      exercisesId: item.id,
                    });
                  }}
                  style={styles.listItem}>
                  {console.log(item.image)}
                  <Image
                    source={{
                      uri:
                        'https://cdn3.omidoo.com/sites/default/files/imagecache/2560x2560/images/headline/201808/legsstrongmuscular.jpg',
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
