import 'react-native-gesture-handler';
import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import styles from './styles';

function Toolbar(navigation, title) {
  return (
    <View style={styles.toolbar}>
      <View style={[styles.drawerButton, styles.radius]}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Image
            source={require('./imgs/more.png')}
            style={{height: 40, width: 40}}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 2}} />
      <Text style={{color: 'black', fontSize: 26}}>{title}</Text>
      <View style={{flex: 3}} />
    </View>
  );
}
export default Toolbar;
