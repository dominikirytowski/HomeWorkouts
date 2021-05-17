import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, {Component} from 'react';
import Toolbar from './Toolbar';
import meals from './styles/meals';
import {Button, TextInput} from 'react-native-paper';



function ProductComponent({navigation, route}) {


    const title = route.params.title;
    const [text, setText] = React.useState('');
    const [show, setShow] = React.useState(false);
    const [res, setResponse] = React.useState();

    function createItem(){
        if(res != null) {
            {
                console.log(res.product["image_front_small_url"]);
                return(
                    <View>
                        <Text>{res.product["brands"]}</Text>
                        <Image style={{height: 150, width: 150}} source={{uri: res.product["image_front_small_url"]}}/>

                    </View>
                )
            }
        }
    }

    return (


            <View style={meals.containerMeals}>
                    <View style={meals.toolbarMeals}>
                        {Toolbar(navigation, title)}
                    </View>

                <View style={meals.insideMeals}>
                    { show &&
                        <View style={meals.mealDetail}>
                            <ScrollView style={meals.scrollViewStyle}>
                                {createItem()}
                            </ScrollView>
                        </View>
                    }
                    <View style={meals.btnAndText}>
                                <TextInput
                                label="Product code"
                                style={meals.input}
                                value={text}
                                onChangeText={text => setText(text)}
                                mode="outlined"
                                keyboardType="numeric"
                                />
                            <Button style={{marginTop: "5%"}}
                                mode="contained"
                                onPress={() => {
                                    Keyboard.dismiss();
                                    setShow(true);
                                    fetch('https://world.openfoodfacts.org/api/v0/product/' + text, {method: 'GET'})
                                        .then((response) => response.json())
                                         .then((json) => {
                                              setResponse(json);
                                         })
                                        .catch((error) => {
                                            console.log(error);
                                        });
                                }}
                            >Check</Button>
                    </View>
                </View>
            </View>

    );
}

export default ProductComponent;


// console.log(response.product["brands"])
// console.log(response.product["image_front_small_url"]);
// // let image = props.response.product["image_nutrition_small_url"];
// console.log(response.product.nutriments["energy-kcal_serving"]);
// console.log(response.product.nutriments["energy-kcal_unit"]);
// console.log(response.product.nutriments["sugars_serving"]);
// console.log(response.product.nutriments["sugars_unit"]);
// console.log(response.product.nutriments["proteins_serving"]);
// console.log(response.product.nutriments["proteins_unit"]);
// console.log(response.product.nutriments["carbohydrates_serving"]);
// console.log(response.product.nutriments["carbohydrates_unit"]);
// console.log(response.product.nutriments["fat_serving"]);
// console.log(response.product.nutriments["fat_unit"]);

