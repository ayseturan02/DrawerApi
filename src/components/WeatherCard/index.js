import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const WeatherCard = props => {
  const {icon, date, description, degree, day} = props;
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
      }}>
      <View
        style={{
          backgroundColor: '#C6DEF6',
          height: windowWidth * 0.4,
          width: windowWidth * 0.9,
          borderRadius: windowHeight * 0.04,
        }}>
        <View style={{flexDirection: 'row', margin: windowWidth * 0.03}}>
          <Text
            style={{
              color: 'black',
              fontSize: windowWidth * 0.05,
              fontWeight: '600',
            }}>
            {date}/
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: windowWidth * 0.05,
              fontWeight: '600',
            }}>
            {day}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            height: windowWidth * 0.2,
          }}>
          <View>
            <Image
              source={{uri: icon}}
              style={{height: windowWidth * 0.2, width: windowWidth * 0.2}}
            />
          </View>
          <View>
            <Text
              style={{
                color: '#00414A',
                fontSize: windowWidth * 0.05,
                fontWeight: '600',
              }}>
              {description}
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: windowWidth * 0.06,
                fontWeight: '600',
              }}>
              {degree}°C
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({});
