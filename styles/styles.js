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
    height: '60%',
    width: '60%',
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
    width: '60%',
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
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
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
    //backgroundColor: '#F5F8FA',
    backgroundColor: 'black',
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
  prevNextButtons: {
    flexDirection: 'row',
  },
  prevNextText: {
    color: 'black',
  },
  fastForwardImage: {
    height: 20,
    width: 20,
    marginLeft: 3,
  },
  goBackImage: {
    height: 20,
    width: 20,
    marginRight: 3,
    transform: [{rotate: '180deg'}],
  },
  buttonAnim: {
    padding: 8,
  },
  buttonTextAnim: {
    fontSize: 17,
    color: '#007AFF',
  },
  subView: {
    position: 'absolute',
    top: -300,
    left: 0,
    right: 0,
    backgroundColor: 'red',
    height: 300,
    width: '100%',
  },
  icon: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 22,
    color: '#5F6D7A',
  },
  description: {
    marginTop: 20,
    textAlign: 'center',
    color: '#9c9c9c',
    fontSize: 16,
    margin: 40,
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#3498db',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  input: {
    height: 50,
    width: 150,
  },

});

export default styles;
