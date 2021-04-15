function NextQuestion({navigation}, title, training, index, length) {
  if (index - 1 < length) {
    navigation.navigate('Exercises', {
      training: training,
      index: index + 1,
      length: length,
    });
  }
}
export default NextQuestion;
