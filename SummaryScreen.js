import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import styles from './styles/styles';

class SummaryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
      training: this.props.route.params.training,
      elapsed: this.props.route.params.elapsed,
    };
  }

  componentWillUnmount = () => {
    this.setState({
      navigation: null,
      training: null,
      elapsed: null,
    });
  };

  componentDidUpdate = () => {};

  showTime = () => {
    let hours = parseInt(this.state.elapsed.substring(0, 2));
    let minutes = parseInt(this.state.elapsed.substring(3, 5));
    let seconds = parseInt(this.state.elapsed.substring(6, 8));
    console.log('hours: ' + hours);
    console.log('minutes: ' + minutes);
    console.log('seconds: ' + seconds);

    let time = '';
    hours !== 0 ? (time += hours + ' hours, ') : (time += '');
    minutes !== 0 ? (time += minutes + ' minutes, ') : (time += '');
    seconds !== 0 ? (time += seconds + ' seconds') : (time += '');

    return time;
  };

  render() {
    return (
      <View style={styles.containerTraining}>
        <View style={styles.container}>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://img.icons8.com/color/70/000000/facebook-like.png',
            }}
          />
          <Text style={styles.title}>Congratulations</Text>
          <Text style={styles.description}>
            You finished {this.state.training.title} training in{' '}
            {this.showTime()}
          </Text>
          <TouchableHighlight
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => this.state.navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default SummaryScreen;
