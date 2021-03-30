import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import styles from './styles/styles_drawer';

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
              navigation.navigate(n.title, {title: n.title});
            }}>
            <Text>{n.title}</Text>
          </TouchableOpacity>
        ))}
      </DrawerContentScrollView>
    );
  }
}

export default CustomDrawerContent;
