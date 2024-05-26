import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import FlatListPharmacy from '../../components/FlatListPharmacy';
import Input from '../../components/Input';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PharmacyPage = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Input />
          <FlatListPharmacy />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PharmacyPage;

const styles = StyleSheet.create({});
