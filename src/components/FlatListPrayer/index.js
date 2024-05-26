import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PrayerCard from './../../components/PrayerCard';
import {useState, useEffect} from 'react';
import {all, PrayerApi} from './../../services';

const city = 'Elazig';
const urlSent = `?data.city=${city}`;

const payload = {
  title: 'Blog Title',
  body: 'lorem ipsum',
  userId: 1,
};

const FlatListPrayer = (props) => {
  const {city} = props;
  const [prayer, setPrayer] = useState([]);

  const fetchData = () => {
    all
      .allApi(urlSent)
      .then(data => {
        console.log('data', data);
        setPrayer(data.result);
        console.log('prayer', prayer);
      })
      .catch(error => {
        console.error('Hata:', error);
      });
    all
      .allApi(payload)
      .then(data => {
        console.log('Veri alındı:', data);
      })
      .catch(error => {
        console.error('Hata:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <FlatList
      data={prayer}
      scrollEnabled={false}
      keyExtractor={item => item.vakit}
      renderItem={({item}) => {
        console.log('item', item);
        return (
          <View>
            <PrayerCard title={item.vakit} time={item.saat} city={item.city} />
          </View>
        );
      }}
    />
  );
};

export default FlatListPrayer;

const styles = StyleSheet.create({});
