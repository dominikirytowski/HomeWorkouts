import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  reps:{
    fontSize: 28,
  },
  scrollContainerExercises: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  exerciseItem: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'grey',
    backgroundColor: '#F5F8FA',
    flexBasis: '100%',
    height: 100,
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  startStopButton: {
    height: 70,
    width: '80%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startStopRed: {
    backgroundColor: 'red',
  },
  startStopBlue: {
    backgroundColor: 'blue',
  },
  startButton: {
    backgroundColor: 'blue',
    height: 70,
    width: '80%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  start: {
    color: 'white',
    fontSize: 22,
  },
  trainingTime: {
    flex: 0.5,
    width: '100%',
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    alignItems: 'center',
  },
  trainingExercises: {
    flex: 6,
    width: '100%',
    backgroundColor: 'white',
  },
  trainingStart: {
    flex: 1,
    width: '100%',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  trainingImg: {
    width: 350,
    height: 250,
  },
  containerTraining: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'lightblue',
    width: '100%',
  },
  container: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    width: '100%',
  },
  safeArea: {
    flex: 10,
    width: '100%',
  },
  scrollContainer: {
    alignItems: 'center',
  },
  scrollview: {
    width: '100%',
    flex: 1,
  },
  listItem: {
    flex: 5,
    backgroundColor: '#F5F8FA',
    width: 200,
    height: 300,
    marginVertical: 5,
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
