import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 400,
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
