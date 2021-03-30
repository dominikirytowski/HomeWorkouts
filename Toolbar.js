import 'react-native-gesture-handler';
import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import styles from './styles/styles_toolbar';

function Toolbar(navigation, title) {
  return (
    <View style={styles.toolbar}>
      <View style={styles.drawerButton}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Image source={require('./imgs/more.png')} style={styles.openDraw} />
        </TouchableOpacity>
      </View>
      <View style={styles.flex2} />
      <Text style={styles.toolbarTitle}>{title}</Text>
      <View style={styles.flex3} />
    </View>
  );
}
export default Toolbar;
