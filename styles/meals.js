
import {StyleSheet} from 'react-native';

const meals = StyleSheet.create({
    containerMeals: {
        flex: 1,
        // backgroundColor: 'blue',
    },

    insideMeals: {
        flex: 10,
        // backgroundColor: 'yellow',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    containerMealsBtn: {
        flex: 1,
        // backgroundColor: 'red',
        width: '100%',
    },

    input: {
        height: 50,
        width: 150,
    },

    toolbarMeals:{
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
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollViewStyle: {
        flex: 1,
    },


});

export default meals;
