import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import styles from './styles/styles_drawer';
import TRAININGS from './trainingsGeneral';

class CustomDrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
    };
  }

  render() {
    const navigation = this.state.navigation;
    return (
      <DrawerContentScrollView style={styles.drawerScroll}>
        <Text style={styles.drawerTitle}>Fitness</Text>
        <Image
          source={require('./imgs/deadlift.jpg')}
          style={styles.drawerImage}
        />
        <View style={styles.drawerSection}>
          <TouchableOpacity
            style={styles.drawerOption}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text>Home</Text>
          </TouchableOpacity>
        </View>
        {TRAININGS.map(n => (
          <TouchableOpacity
            style={styles.drawerOption}
            onPress={() => {
              navigation.navigate(n.title, {title: n.title, exercisesId: n.id});
            }}>
            <Text>{n.title}</Text>
          </TouchableOpacity>
        ))}
      </DrawerContentScrollView>
    );
  }
}

export default CustomDrawerContent;
