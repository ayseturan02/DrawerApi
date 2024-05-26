import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import FlatListWeather from '../../components/FlatListWeather';
import Input from '../../components/Input';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const WeatherPage = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Input />
          <FlatListWeather />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WeatherPage;

const styles = StyleSheet.create({});
