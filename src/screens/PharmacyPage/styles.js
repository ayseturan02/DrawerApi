import {StyleSheet, Text, View, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  input: {
    backgroundColor: '#CFCFCF',
    height: windowWidth * 0.15,
    width: windowWidth * 0.9,
    borderRadius: windowWidth * 0.04,
    borderColor: 'white',
    borderWidth: windowWidth * 0.003,
  },
  text_style: {
    fontSize: windowWidth * 0.04,
    color: '#3D3C41',
    fontWeight: '600',
  },
});
