import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Home() {
  const [title, setTitle] = React.useState('Home');
  return (
    
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#231942',
          borderBottomEndRadius: 5,
          borderBottomStartRadius: 5,
        }}>
        <Image style={{width: windowWidth, height: 200, resizeMode: 'contain'}} source={require('../assets/dndice.png')} />
      </View>
      <View style={styles.innerContainer}>
      
         
        
        
        <TouchableOpacity style={styles.button}>
          <Text>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: '#413768',
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#9988A4',
    paddingBottom: windowHeight / 20,
    justifyContent: 'space-between',
  }, 
  header: {
    margin: 24,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E6DEFC',
  },
  innerContainer: {
    flex: 1,   
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    padding: 10,
  },
 
});
