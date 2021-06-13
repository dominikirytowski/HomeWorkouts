import {StyleSheet} from 'react-native';

const meals = StyleSheet.create({
  containerMeals: {
    flex: 1,
    // backgroundColor: 'blue',
    width: '100%',
  },

  insideMeals: {
    flex: 10,
    // backgroundColor: 'yellow',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },

  containerMealsBtn: {
    flex: 1,
    // backgroundColor: 'red',
    width: '100%',
  },

  input: {
    marginTop: 20,
    height: 50,
    width: 150,
  },

  toolbarMeals: {
    flex: 1,
    // backgroundColor: 'brown',
    width: '100%',
  },
  btnAndText: {
    marginBottom: 100,
    left: 0,
    right: 0,
    flex: 1,
  },

  mealDetail: {
    flex: 4,
    width: '100%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewStyle: {
    flex: 1,
    width: '100%',
  },
  mealItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  mealTitle: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 14,
    color: '#5F6D7A',
  },
  nutritionTable: {
    width: '100%',
  },
  avoid: {
    height: 600,
    backgroundColor: 'red',
  },
  status: {
    padding: 10,
    textAlign: 'center',
  },
});

export default meals;
