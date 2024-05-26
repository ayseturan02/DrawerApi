import {StyleSheet, Text, View,FlatList} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import {getWeather} from './../../services';
import WeatherCard from './../../components/WeatherCard';

const city = 'Elazig';
const urlSent = `?data.lang=tr&data.city=${city}`;

const payload = {
  title: 'Blog Title',
  body: 'lorem ipsum',
  userId: 1,
};

const FlatListWeather = props => {
  const [weather, setWeather] = useState([]);

  const fetchData = () => {
    getWeather
      .getWeatherApi(urlSent)
      .then(data => {
        console.log('data', data);
        setWeather(data.result);
        console.log('weather', weather);
      })
      .catch(error => {
        console.error('Hata:', error);
      });
    getWeather
      .getWeatherApi(payload)
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
      data={weather}
      scrollEnabled={false}
      keyExtractor={item => item.date}
      renderItem={({item}) => {
        console.log('item', item);
        return (
          <View>
            <WeatherCard
              icon={item.icon}
              date={item.date}
              description={item.description}
              degree={item.degree}
              day={item.day}
            />
          </View>
        );
      }}
    />
  );
};

export default FlatListWeather;

const styles = StyleSheet.create({});
