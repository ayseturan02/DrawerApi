import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomePage = () => {
  return (
    <SafeAreaView
      style={{
        height: windowHeight * 1,
        width: windowWidth * 1,
        backgroundColor: '#000000',
      }}>
      <View>
        <Text style={{fontFamily: 'fonts2', fontSize: 150, color: 'white'}}>
          HomePage
        </Text>

        <View style={{top: windowWidth * 0.3}}>
          <Text style={{fontFamily: 'fonts2', fontSize: 350, color: 'white'}}>
            llll
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
