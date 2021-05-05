import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  repsTime: {
    flexDirection: 'row',
  },
  exerciseClock: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
  exerciseGifView: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
  exerciseTitleView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
  exerciseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  exerciseGif: {
    height: '70%',
    resizeMode: 'contain',
  },
  reps: {
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
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemGif: {
    height: 80,
    width: 100,
  },
  itemName: {
    fontSize: 18,
  },
  imagePlaceHolder: {
    flex: 1.5,
    height: '80%',
    marginHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlaceHolderText: {
    fontSize: 18,
    color: 'white',
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
    backgroundColor: 'lightgray',
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
    flex: 3,
    backgroundColor: '#F5F8FA',
    width: 400,
    height: 200,
    marginVertical: 5,
    justifyContent: 'center',
    borderRadius: 20,
  },
  listImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  listTitle: {
    textTransform: 'uppercase',
    position: 'absolute',
    top: 30,
    left: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
  },
  listLastTime: {
    position: 'absolute',
    top: 65,
    left: 20,
    textAlign: 'center',
    color: 'yellow',
    fontSize: 18,
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    width: 150,
  },
  containerMeals: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  insideMeals: {
    flex: 3,
    // backgroundColor: 'yellow',
  },
  containerMealsBtn: {
    flex: 3,
    // backgroundColor: 'red',
    width: '100%',
  },

});

export default styles;
