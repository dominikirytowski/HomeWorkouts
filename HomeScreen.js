import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from './styles';

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
        <View style={styles.container}>
          <ScrollView>
            <SafeAreaView>
              <FlatList
                keyExtractor={item => item.id}
                data={DATA}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => {
                      this.state.navigation.navigate(item.title, {
                        title: item.title,
                      });
                    }}
                    style={styles.listItem}>
                    <Text>{item.title}</Text>
                  </TouchableOpacity>
                )}
              />
            </SafeAreaView>
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
