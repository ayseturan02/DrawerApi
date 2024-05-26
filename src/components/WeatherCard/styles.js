import {Dimensions, StyleSheet, Text, View} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default styles = StyleSheet.create({
  position: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowWidth * 0.04,
  },
  card_view: {
    backgroundColor: 'white',
    height: windowWidth * 0.35,
    borderColor: '#C6DEF6',
    borderWidth: windowWidth * 0.005,
    width: windowWidth * 0.9,
    borderRadius: windowHeight * 0.02,
  },
  date_style: {
    color: '#5C91E7',
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
  },
  day_style: {
    color: '#002868',
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
  },
  image_position: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: windowWidth * 0.2,
    width: windowWidth * 0.9,
  },
  description_style: {
    color: '#62002F',
    fontSize: windowWidth * 0.05,
    fontWeight: '600',
  },
  degree_style: {
    color: 'black',
    fontSize: windowWidth * 0.06,
    fontWeight: '600',
  },
});
