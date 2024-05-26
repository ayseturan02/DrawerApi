import {View, Dimensions, Image, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
const windowWidth = Dimensions.get('window').width;
import {ben} from './../../assets/images/index';

const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <View style={styles.image_view}>
          <View style={{margin: windowWidth * 0.025}}>
            <Image source={ben} style={styles.image_size} />
            <View
              style={styles.name_position}>
              <Text
                style={styles.name_style}>
                aYse
              </Text>
            </View>
          </View>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
