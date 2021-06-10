import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles/styles';
import Toolbar from './Toolbar';

class SummaryScreen extends Component {
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
    const training = this.state.route.params.training;

    return (
      <View style={styles.containerTraining}>
        {Toolbar(this.state.navigation, title)}
        <SafeAreaView style={styles.safeArea}>
          <Text>You are in summary! Training finished well done!</Text>
        </SafeAreaView>
        <View style={styles.trainingStart} />
      </View>
    );
  }
}

export default SummaryScreen;
