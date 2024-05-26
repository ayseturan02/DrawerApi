import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const PrayerCard = props => {
  const {title, time} = props;
  return (
    <View>
      <View style={{alignItems: 'center', alignSelf: 'center', marginTop: 10}}>
        <View style={styles.view}>
          <View style={styles.view2}>
            <View style={styles.text_position}>
              <Text style={styles.text_style}>{title}</Text>
              <Text style={styles.text_style1}>{time}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PrayerCard;
