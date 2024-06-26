import {StyleSheet, Text, View, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  input: {
    backgroundColor: '#98C0FF',
    opacity: 0.5,
    height: windowWidth * 0.15,
    width: windowWidth * 0.9,
    borderRadius: windowWidth * 0.04,
    borderColor: 'white',
    borderWidth: windowWidth * 0.003,
  },
  text_style: {
    fontSize: windowWidth * 0.05,
    color: '#0D5CDC',
    fontWeight: '600',
  },
});
