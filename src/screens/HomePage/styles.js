import {StyleSheet, Text, View, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  input: {
    backgroundColor: '#4C4B51',
    height: windowWidth * 0.15,
    width: windowWidth * 0.9,
    borderRadius: windowWidth * 0.04,
    borderColor: 'white',
    borderWidth: windowWidth * 0.003,
  },
});
