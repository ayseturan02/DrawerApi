import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {HomePage, WeatherPage, PharmacyPage, PrayerTimesPage} from '../screens';
import {createDrawerNavigator} from '@react-navigation/drawer';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import DrawerContent from '../components/DrawerContent';
const Drawer = createDrawerNavigator();

const RootStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        drawerType: 'front',
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: '#FEBF00',
        drawerStyle: {
          backgroundColor: 'white',
          width: windowWidth * 0.6,
          height: windowHeight * 1,
        },
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomePage" component={HomePage} />
      <Drawer.Screen name="WeatherPage" component={WeatherPage} />
      <Drawer.Screen name="PharmacyPage" component={PharmacyPage} />
      <Drawer.Screen name="PrayerTimesPage" component={PrayerTimesPage} />
    </Drawer.Navigator>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
