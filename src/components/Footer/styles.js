import { StyleSheet } from 'react-native';
import { Directions } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: '#023047',
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderTopWidth: 5,
    borderTopColor: '#EE6B26',
    alignItems: 'center',
    justifyContent: 'space-between'
  }, 
  button: {
    position: 'relative',
    top: -40
  },
  image: {
    width: 80,
    height: 80
  },
  text: {
    position: 'relative',
    top: -35,
    color: '#FFF'
  }

});

export default styles;