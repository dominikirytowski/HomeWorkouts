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
} from 'react-native';
import Toolbar from './Toolbar';
import styles from './styles/styles';

const TRAININGS = [
  {
    id: '1',
    title: 'Całe ciało',
  },
  {
    id: '2',
    title: 'Mięśnie brzucha',
  },
  {
    id: '3',
    title: 'Klatka piersiowa',
  },
  /*
  {
    id: '4',
    title: 'Ramiona',
  },
  {
    id: '5',
    title: 'Nogi',
  },
  {
    id: '6',
    title: 'Barki i plecy',
  },*/
];

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
                  <Text>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
          </ScrollView>
        </SafeAreaView>
        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
