import { StyleSheet } from 'react-native';

export const mapCityListItemStyles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderColor: 'grey'
  },
  image: { width: 60, height: 60, marginRight: 8 },
  name: {
    fontSize: 25
  },
  weatherType: {
    fontSize: 18
  },
  tempContainer: {
    backgroundColor: 'lightblue',
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 12,
    marginLeft: 'auto',
    marginRight: 12,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  temp: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
