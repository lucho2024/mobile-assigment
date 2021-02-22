import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  containerImg: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerText: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    marginLeft: 10,
  },
  containerGray: {
    flex: 2,
  },
  containerBlue: {
    flex: 6,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: '90%',
    height: 280,
    borderRadius: 10,
  },
  textGray: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ACAEAF',
  },
  textBlue: {
    fontSize: 16,
    color: '#1A67D9',
  },
});
