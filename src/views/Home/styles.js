import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative'
  },
  filter: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    height: 70,
    alignItems: 'center'
  },
  filterTextActived: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#EE6B26'
  },
  filterTextInative: {
    color: '#20295f',
    fontWeight: 'bold',
    fontSize: 18,
    opacity: 0.5
  },
  content: {
    width: '100%',
    marginTop: 30
  },
  title: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#20295f',
    alignItems: 'center'
  },
  titleText: {
    color: '#20295f',
    fontSize: 18,
    position: 'relative',
    top: 11,
    backgroundColor: '#FFF',
    paddingHorizontal: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  }
});

export default styles;