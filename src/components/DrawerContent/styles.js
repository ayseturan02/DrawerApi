import {Dimensions, StyleSheet, Text, View} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  container: {
    padding: windowWidth * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_view: {
    backgroundColor: 'black',
    height: windowWidth * 0.4,
    width: windowWidth * 0.4,
    borderRadius: windowWidth * 1,
  },
  image_size: {
    height: windowWidth * 0.35,
    width: windowWidth * 0.35,
    borderRadius: windowWidth * 1,
  },
  name_position: {marginLeft: windowWidth * 0.1, top: windowWidth * 0.02},
  name_style: {fontFamily: 'fonts2', fontSize: windowWidth * 0.08,color:"black"},
});
