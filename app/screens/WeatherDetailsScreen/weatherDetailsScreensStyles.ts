import { StyleSheet } from 'react-native';

export const weatherDetailsScreensStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 6,
    paddingVertical: 18
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowNameValue: {
    height: 60,
    padding: 12,
    borderBottomWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  subTitle: {
    paddingTop: 4,
    fontSize: 16,
    color: 'grey'
  },
  textValueName: {
    fontSize: 18
  },
  textValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 'auto'
  },
  image: {
    width: 70,
    height: 70,
    marginLeft: 'auto'
  }
});
