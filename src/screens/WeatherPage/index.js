import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import {useEffect, useState} from 'react';
import {getWeather} from './../../services';
import styles from './styles';
import WeatherCard from '../../components/WeatherCard';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const WeatherPage = () => {
  const [weather, setWeather] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState('');

  const fetchData = city => {
    const urlSent = `?data.lang=tr&data.city=${city}`;
    setWeather([]);
    getWeather
      .getWeatherApi(urlSent)
      .then(data => {
        console.log('data', data);
        setWeather(data.result);
        setFilterData(data.result);
        console.log('selam');
      })
      .catch(error => {
        console.error('Hata:', error);
      });
  };

  useEffect(() => {
    fetchData('Elazig');
  }, []);

  useEffect(() => {
    if (search) {
      fetchData(search);
    } else {
      fetchData('Elazig');
    }
  }, [search]);

  const itemView = ({item}) => {
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
  };

  const searchFilter = text => {
    setSearch(text);
  };

  return (
    <View>
      <View style={{alignItems: 'center', alignSelf: 'center', marginTop: 10}}>
        <TextInput
          style={styles.input}
          placeholder="Enter city name"
          placeholderTextColor={'black'}
          value={search}
          onChangeText={text => searchFilter(text)}
        />
        <View style={{padding: windowWidth * 0.023}}>
          <Text
            style={{
              fontSize: windowWidth * 0.05,
              color: '#0D5CDC',
              fontWeight: '600',
            }}>
            {search ? search : 'Elazığ '} Haftalık Hava Durumu
          </Text>
        </View>
      </View>
      <FlatList
        data={filterData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={itemView}
      />
    </View>
  );
};

export default WeatherPage;
