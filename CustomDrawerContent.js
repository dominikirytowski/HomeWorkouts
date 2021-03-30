import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import styles from './styles/styles_drawer';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '581239aa0f-3da1-471f-bd96-145571e29d72',
    title: 'Fourth Item',
  },
  {
    id: '5869123a0f-3da1-471f-bd96-1451231e29d72',
    title: 'Fifth Item',
  },
  {
    id: '58694a120f-3da1-47112f-bd96-141241e29d72',
    title: 'Sixth Item',
  },
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
        {DATA.map(n => (
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
