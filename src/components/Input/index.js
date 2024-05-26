import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
const windowWidth = Dimensions.get('window').width;
import {all} from './../../services';

const Input = () => {
  const [prayer, setPrayer] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const urlSent = `?data.city=?`;
    setPrayer([]);
    all
      .allApi(urlSent)
      .then(data => {
        console.log('data', data);
        setPrayer(data.result);
        setFilterData(data.result);
        setMasterData(data.result);
      })
      .catch(error => {
        console.error('Hata:', error);
      });
  };

  const itemView = ({item}) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  useEffect(() => {
    if (search) {
      const newData = prayer.filter(item =>
        item.vakit.toLowerCase().includes(search.toLowerCase()),
      );
      setFilterData(newData);
    } else {
      setFilterData(masterData);
    }
  }, [search, prayer, masterData]);

  const searchFilter = text => {
    setSearch(text);
  };

  return (
    <View style={{padding: windowWidth * 0.05}}>
      <TextInput
        style={styles.input_view}
        placeholder="Şehir Giriniz"
        placeholderTextColor={'white'}
        value={search}
        onChangeText={text => searchFilter(text)}
      />
      <FlatList
        data={filterData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={itemView}
      />
    </View>
  );
};

export default Input;
