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
import {dutyPharmacy} from './../../services';
import styles from './styles';
import PharmacyCard from '../../components/PharmacyCard';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PharmacyPage = () => {
  const [pharmacy, setPharmacy] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState('');

  const fetchData = city => {
    const urlSent = `?il=${city}`;
    setPharmacy([]);
    dutyPharmacy
      .dutyPharmacyApi(urlSent)
      .then(data => {
        console.log('data', data);
        setPharmacy(data.result);
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
        <PharmacyCard
          name={item.name}
          dist={item.dist}
          address={item.address}
          phone={item.phone}
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
        <View style={{padding: windowWidth * 0.02}}>
          <Text style={styles.text_style}>
            {search ? search : 'Elazığ '} Nöbetçi Eczaneler
          </Text>
        </View>
        <FlatList
          data={filterData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={itemView}
        />
      </View>
    </View>
  );
};

export default PharmacyPage;
