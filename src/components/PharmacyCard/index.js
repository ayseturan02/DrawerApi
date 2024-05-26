import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import styles from './styles';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PharmacyCard = props => {
  const {name, dist, phone, address} = props;
  return (
    <View>
      <View style={styles.view_position}>
        <View style={styles.view}>
          <View style={{margin: windowWidth * 0.05}}>
            <Text style={styles.text_style}>
              {name} / {dist}
            </Text>
            <Text style={styles.tel_style}>{phone}</Text>
            <View>
              <Text>{address}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PharmacyCard;
