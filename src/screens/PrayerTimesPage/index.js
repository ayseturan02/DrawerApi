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

const PrayerTimesPage = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#3D3C41',
        height: windowHeight * 1,
        width: windowWidth * 1,
      }}>
      <View style={{padding: windowWidth * 0.05}}>
        <TextInput
          style={{
            backgroundColor: '#4C4B51',
            height: windowWidth * 0.12,
            width: windowWidth * 0.9,
            borderRadius: windowWidth * 0.04,
            borderColor: 'white',
            borderWidth: windowWidth * 0.003,
          }}
          placeholder="Şehir Giriniz"
          placeholderTextColor={'white'}
        />
      </View>
      <FlatListPrayer />
    </SafeAreaView>
  );
};

export default PrayerTimesPage;

const styles = StyleSheet.create({});
