import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import styles from './styles/styles_drawer';
import {
  getExercises,
  getPersonLastTraining,
  getTrainings,
} from './NetworkingImpl';
import ADMIN from './UserAdmin';

class CustomDrawerContent extends Component {
  componentDidMount() {
    getTrainings().then(r => this.setState({trainings: r}));
  }

  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
      trainings: [],
    };
  }

  render() {
    const navigation = this.state.navigation;
    return (
      <DrawerContentScrollView style={styles.drawerScroll}>
        <Text style={styles.drawerTitle}>Fitness</Text>
        <Image
          source={{
            uri: 'https://post.healthline.com/wp-content/uploads/2019/10/Female_Male_Rope_Workout_1200x628-facebook.jpg',
          }}
          style={styles.drawerImage}
        />
        <View style={styles.drawerSection}>
          <TouchableOpacity
            style={styles.drawerOption}
            onPress={() => {
              navigation.navigate('Home', {
                last: getPersonLastTraining(ADMIN.id),
              });
            }}>
            <Text>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.drawerSection}>
          <TouchableOpacity
            style={styles.drawerOption}
            onPress={() => {
              navigation.navigate('ProductComponent', {title: 'Meals'});
            }}>
            <Text>Meals</Text>
          </TouchableOpacity>
        </View>
        {this.state.trainings.map(n => (
          <TouchableOpacity
            style={styles.drawerOption}
            onPress={() => {
              getExercises(parseInt(n.id)).then(r =>
                this.state.navigation.navigate(r.title, {
                  title: r.title,
                  training: r,
                }),
              );
            }}>
            <Text>{n.title}</Text>
          </TouchableOpacity>
        ))}
      </DrawerContentScrollView>
    );
  }
}

export default CustomDrawerContent;
