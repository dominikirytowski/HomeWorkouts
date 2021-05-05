import {KeyboardAvoidingView, Platform, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import Toolbar from './Toolbar';
import styles_toolbar from './styles/styles_toolbar';
import styles from './styles/styles';
import {Button, TextInput} from 'react-native-paper';



function ProductComponent({navigation, route}) {


    const title = route.params.title;
    const [text, setText] = React.useState('');


    return (

            <View style={styles.containerMeals}>
                <View style={styles_toolbar.toolbarMeals}>
                    {Toolbar(navigation, title)}
                </View>
                <View style={styles.insideMeals}>
                    <TextInput
                        label="Product code"
                        style={styles.input}
                        value={text}
                        onChangeText={text => setText(text)}
                        mode="outlined"
                        keyboardType="numeric"
                    />
                    <Button style={{marginTop: "5%"}}
                        mode="contained"
                        onPress={() => {
                            fetch('https://world.openfoodfacts.org/api/v0/product/' + text, {method: 'GET'})
                                .then((response) => response.json())
                                .then((response) => {
                                    console.log(response.product["brands"]);
                                    console.log(response.product["image_nutrition_small_url"]);
                                    console.log(response.product.nutriments["energy-kcal_serving"]);
                                    console.log(response.product.nutriments["energy-kcal_unit"]);
                                    console.log(response.product.nutriments["sugars_serving"]);
                                    console.log(response.product.nutriments["sugars_unit"]);
                                    console.log(response.product.nutriments["proteins_serving"]);
                                    console.log(response.product.nutriments["proteins_unit"]);
                                    console.log(response.product.nutriments["carbohydrates_serving"]);
                                    console.log(response.product.nutriments["carbohydrates_unit"]);
                                    console.log(response.product.nutriments["fat_serving"]);
                                    console.log(response.product.nutriments["fat_unit"]);

                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        }}
                    >Check</Button>
                </View>
            </View>
    );
}

export default ProductComponent;
