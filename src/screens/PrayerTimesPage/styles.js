import {StyleSheet, Text, View, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  input_position:{
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#496071',
    height: windowWidth * 0.15,
    width: windowWidth * 0.9,
    borderRadius: windowWidth * 0.04,
    borderColor: 'white',
    opacity: 0.5,
    borderWidth: windowWidth * 0.003,
  },
  image_size: {
    height: windowHeight * 1,
    width: windowWidth * 1,
    position: 'absolute',
  },
  text_style: {
    fontFamily: 'fonts1',
    fontSize: windowWidth * 0.07,
    color: '#E85E23',
  },
});
