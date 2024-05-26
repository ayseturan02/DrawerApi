import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PharmacyCard = props => {
  const {name, dist, phone, address} = props;
  return (
    <View>
      <View
        style={{
          alignContent: 'center',
          alignItems: 'center',
          marginTop: windowWidth * 0.05,
        }}>
        <View
          style={{
            backgroundColor: '#B6BBE3',
            height: windowWidth * 0.3,
            width: windowWidth * 0.9,
            borderRadius: windowWidth * 0.04,
          }}>
          <View style={{margin: windowWidth * 0.05}}>
            <Text
              style={{
                color: 'black',
                fontSize: windowWidth * 0.05,
                fontWeight: '600',
              }}>
              {name} / {dist}
            </Text>
            <Text style={{color: 'gray', fontSize: windowWidth * 0.035}}>
              {phone}
            </Text>
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

const styles = StyleSheet.create({});
