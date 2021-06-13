import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import Toolbar from './Toolbar';
import meals from './styles/meals';
import {Button, TextInput, DataTable} from 'react-native-paper';
import Animated from 'react-native-reanimated/src/Animated';

function ProductComponent({navigation, route}) {
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      setShow(false);
      setText('');
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [viewHeight, setViewHeight] = useState(0);
  const title = route.params.title;
  const [text, setText] = React.useState('3017620422003');
  const [show, setShow] = React.useState(false);
  const [res, setResponse] = React.useState(null);

  const _keyboardDidShow = () => {
    console.log('keyboardDidShow');
    setViewHeight(600);
    setKeyboardStatus(true);
  };
  const _keyboardDidHide = () => {
    console.log('keyboardDidHide');
    setViewHeight(0);
    setKeyboardStatus(false);
  };

  const createAlert = () =>
    Alert.alert(
      'Error',
      "Product with this bar code doesn't exist in database",
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
    );

  function createItem() {
    if (res !== null) {
      if (res.status_verbose === 'product not found') {
        createAlert();
      } else {
        let jsonData = res.product.nutriments;
        let nutrition = [];
        Object.keys(jsonData).forEach(function (key) {
          if (
            !key.endsWith('100g') &&
            !key.endsWith('serving') &&
            !key.endsWith('unit') &&
            !key.endsWith('value') &&
            !key.endsWith('group') &&
            !key.endsWith('fr') &&
            !key.endsWith('product') &&
            !key.endsWith('energy')
          ) {
            let objMap = {
              key: key,
              value100: jsonData[key + '_100g'],
              valueServing: jsonData[key + '_serving'],
              unit: jsonData[key + '_unit'],
            };
            let jsonItem = JSON.stringify(objMap);
            nutrition.push(JSON.parse(jsonItem));
          }
        });
        return (
          <View style={meals.mealItem}>
            <Text style={meals.mealTitle}>{res.product.brands}</Text>
            <Image
              style={{height: 150, width: 150}}
              source={{uri: res.product.image_front_small_url}}
            />
            <DataTable style={meals.nutritionTable}>
              <DataTable.Header>
                <DataTable.Title>Nutrition facts</DataTable.Title>
                <DataTable.Title>100 g</DataTable.Title>
                <DataTable.Title>Serving</DataTable.Title>
                <DataTable.Title>Unit</DataTable.Title>
              </DataTable.Header>
              {nutrition.map(n => {
                return (
                  <DataTable.Row>
                    <DataTable.Cell>{n.key}</DataTable.Cell>
                    <DataTable.Cell>{n.value100}</DataTable.Cell>
                    <DataTable.Cell>{n.valueServing}</DataTable.Cell>
                    <DataTable.Cell>{n.unit}</DataTable.Cell>
                  </DataTable.Row>
                );
              })}
            </DataTable>
          </View>
        );
      }
    }
  }

  return (
    <KeyboardAvoidingView style={meals.containerMeals} behavior="padding">
      <View style={meals.toolbarMeals}>{Toolbar(navigation, title)}</View>

      <View style={meals.insideMeals}>
        {show && (
          <View style={meals.mealDetail}>
            <ScrollView style={meals.scrollViewStyle}>
              {createItem()}
            </ScrollView>
          </View>
        )}
        <View style={meals.btnAndText}>
          <TextInput
            label="Product code"
            style={meals.input}
            value={text}
            onChangeText={text => setText(text)}
            mode="outlined"
            keyboardType="numeric"
          />
          <Button
            style={{marginTop: '5%'}}
            mode="contained"
            onPress={() => {
              Keyboard.dismiss();
              setShow(true);
              fetch('https://world.openfoodfacts.org/api/v0/product/' + text, {
                method: 'GET',
              })
                .then(response => response.json())
                .then(json => {
                  setResponse(json);
                })
                .catch(error => {
                  console.log(error);
                });
            }}>
            Check
          </Button>
        </View>
      </View>
      <Animated.View style={[meals.avoid, {height: viewHeight}]}>
        <Text style={meals.status}>{keyboardStatus}</Text>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

export default ProductComponent;
