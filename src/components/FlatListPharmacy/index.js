import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import {dutyPharmacy} from './../../services';
import PharmacyCard from './../../components/PharmacyCard';

const city = 'Adiyaman';
const ilce = 'Merkez';
const urlSent = `?ilce=${ilce}&il=${city}`;

const payload = {
  title: 'Blog Title',
  body: 'lorem ipsum',
  userId: 1,
};

const FlatListPharmacy = () => {
  const [pharmacy, setPharmacy] = useState([]);

  const fetchData = () => {
    dutyPharmacy
      .dutyPharmacyApi(urlSent)
      .then(data => {
        console.log('data', data);
        setPharmacy(data.result);
        console.log('pharmacy', pharmacy);
      })
      .catch(error => {
        console.error('Hata:', error);
      });
    dutyPharmacy
      .dutyPharmacyApi(payload)
      .then(data => {
        console.log('Veri alındı:', data);
      })
      .catch(error => {
        console.error('Hata:', error);
      });
  };


  return (
    <FlatList
      data={pharmacy}
      scrollEnabled={false}
      keyExtractor={item => item.loc}
      renderItem={({item}) => {
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
      }}
    />
  );
};

export default FlatListPharmacy;

const styles = StyleSheet.create({});
