import {Dimensions, StyleSheet, Text, View} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default styles = StyleSheet.create({
  view_position: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: windowWidth * 0.05,
  },
  view: {
    backgroundColor: '#E4DFB7',
    height: windowWidth * 0.3,
    width: windowWidth * 0.9,
    borderRadius: windowWidth * 0.04,
    borderColor: '#3D3C41',
    borderWidth: windowWidth * 0.005,
  },
  text_style: {
    color: 'black',
    fontSize: windowWidth * 0.05,
    fontWeight: '600',
  },
  tel_style: {color: 'gray', fontSize: windowWidth * 0.035},
});
