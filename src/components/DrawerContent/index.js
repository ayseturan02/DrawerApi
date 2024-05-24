import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {ben} from './../../assets/images/index';

const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <View
          style={{
            padding: windowWidth * 0.1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#FEBF00',
              height: windowWidth * 0.2,
              width: windowWidth * 0.2,
              borderRadius: windowWidth * 0.1,
            }}>
            <View style={{margin: windowWidth * 0.015}}>
              <Image
                source={ben}
                style={{
                  height: windowWidth * 0.17,
                  width: windowWidth * 0.17,
                  borderRadius: windowWidth * 0.1,
                }}
              />
            </View>
          </View>
        </View>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});
