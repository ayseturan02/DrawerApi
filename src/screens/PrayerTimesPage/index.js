import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {Not, PlaceApi} from './../../service';
import FlatListPrayer from '../../components/FlatListPrayer';
import Input from '../../components/Input';

const PrayerTimesPage = props => {
  const {city} = props;
  return (
    <SafeAreaView
      style={{

        backgroundColor: '#3D3C41',
        height: windowHeight * 1,
        width: windowWidth * 1,
      }}>
      <Input />
      <View>
        <Text>{city}</Text>
        <FlatListPrayer />
      </View>
    </SafeAreaView>
  );
};

export default PrayerTimesPage;

const styles = StyleSheet.create({});
