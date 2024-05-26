import {StyleSheet, Text, View, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  view: {
    backgroundColor: '#009318',
    opacity: 0.5,
    height: windowWidth * 0.2,
    width: windowWidth * 0.8,
    borderRadius: windowWidth * 0.04,
  },
  view2: {
    backgroundColor: '#C1C0B8',
    height: windowWidth * 0.2,
    width: windowWidth * 0.45,
    borderRadius: windowWidth * 0.04,
  },
  text_style: {
    color: 'black',
    fontSize: windowWidth * 0.05,
    fontWeight: '700',
  },
  text_position: {
    height: windowWidth * 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: windowWidth * 0.5,
    marginLeft: windowWidth * 0.15,
  },
  text_style1: {
    color: 'black',
    fontSize: windowWidth * 0.05,
    fontWeight: '700',
  },
});
