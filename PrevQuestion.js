function PrevQuestion({navigation}, title, training, index, length) {
  if (index > 0) {
    navigation.navigate('Exercises', {
      training: training,
      index: index - 1,
      length: length,
    });
  }
}
export default PrevQuestion;
