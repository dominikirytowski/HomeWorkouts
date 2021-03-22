import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Button} from 'react-native';
import styles from './styles';

class WorkoutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
      route: this.props.route,
    };
  }
  render() {
    const navigation = this.state.navigation;
    const title = this.state.route.params.title;
    return (
      <View style={styles.container}>
        <Button onPress={() => navigation.navigate('Home')} title={title} />
      </View>
    );
  }
}

export default WorkoutScreen;
