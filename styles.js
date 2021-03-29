import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  drawerButton: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 2,
    paddingTop: 2,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'lightgrey',
  },
  radius: {
    borderRadius: 5,
  },
  toolbar: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: 'black',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
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
    backgroundColor: 'lightyellow',
    flexBasis: '100%',
    height: 100,
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 10,
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
    flex: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'lightyellow',
    width: 300,
    height: 100,
    marginVertical: 5,
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
