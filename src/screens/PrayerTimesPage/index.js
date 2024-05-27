import {
  Dimensions,
  Image,
  Text,
  View,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {prayerImage} from './../../assets/images/index';
import {useEffect, useState} from 'react';
import {all} from './../../services';
import styles from './styles';
import PrayerCard from '../../components/PrayerCard';

const windowWidth = Dimensions.get('window').width;
 const PrayerTimesPage = () => {
  const [prayer, setPrayer] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState('');

  const fetchData = city => {
    const urlSent = `?data.city=${city}`;
    setPrayer([]);
    all
      .allApi(urlSent)
      .then(data => {
        console.log('data', data);
        setPrayer(data.result);
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
        <PrayerCard title={item.vakit} time={item.saat} city={item.city} />
      </View>
    );
  };

  const searchFilter = text => {
    setSearch(text);
  };

  return (
    <SafeAreaView>
      <View>
        <Image source={prayerImage} style={styles.image_size} />
        <View
          style={styles.input_position}>
          <TextInput
            style={styles.input}
            placeholder="Enter city name"
            placeholderTextColor={'white'}
            value={search}
            onChangeText={text => searchFilter(text)}
          />
          <View style={{padding: windowWidth * 0.04}}>
            <Text style={styles.text_style}>
              {search ? search : 'Elazıg '} için namaz vakitleri
            </Text>
          </View>
        </View>
        <FlatList
          data={filterData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={itemView}
        />
      </View>
    </SafeAreaView>
  );
};

export default PrayerTimesPage;
