import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import styles from './styles';
const WeatherCard = props => {
  const {icon, date, description, degree, day} = props;
  return (
    <View style={styles.position}>
      <View style={styles.card_view}>
        <View style={{flexDirection: 'row', margin: windowWidth * 0.03}}>
          <Text style={styles.date_style}>{date}/</Text>
          <Text style={styles.day_style}>{day}</Text>
        </View>
        <View style={styles.image_position}>
          <View>
            <Image
              source={{uri: icon}}
              style={{height: windowWidth * 0.2, width: windowWidth * 0.2}}
            />
          </View>
          <View style={{width: windowWidth * 0.3}}>
            <Text
              style={styles.description_style}>
              {description}
            </Text>
            <Text
              style={styles.degree_style}>
              {degree}°C
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WeatherCard;
