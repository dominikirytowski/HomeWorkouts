import {KeyboardAvoidingView, Platform, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import Toolbar from './Toolbar';
import styles_toolbar from './styles/styles_toolbar';
import styles from './styles/styles';
import {Button, TextInput} from 'react-native-paper';


let RESULTS = [];

function ProductComponent({navigation, route}) {


    const title = route.params.title;
    const [text, setText] = React.useState('');
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : -1000;

    return (
        <View>
            <View style={styles_toolbar.toolbarMeals}>
                {Toolbar(navigation, title)}
            </View>
            <View style={styles.containerMeals}>
                <KeyboardAvoidingView
                    behavior="height">
                    <View style={styles.containerMeals}>
                        <View>
                            <TextInput
                                label="Product code"
                                style={styles.input}
                                value={text}
                                onChangeText={text => setText(text)}
                                mode="outlined"
                                keyboardType="numeric"
                            />
                            <Button
                                mode="contained"
                                onPress={() => {
                                    fetch('https://world.openfoodfacts.org/api/v0/product/' + text, {method: 'GET'})
                                        .then((response) => response.json())
                                        .then((response) => {
                                            RESULTS = response;
                                            console.log(RESULTS);
                                        })
                                        .catch((error) => {
                                            console.log(error);
                                        });
                                }}
                            />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </View>
    );
}

export default ProductComponent;
