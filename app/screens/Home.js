import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import AsyncStorageLib from '@react-native-async-storage/async-storage';


export default function Home() {
  
  const customData = require('../components/Spells.json');
  //console.log(customData.push({id:3, text:'weewee' }));
  //console.log(customData)
  const penis = {
    id: 1,
    text: 'penisss'
  }
  customData.push(penis)
  value = require('../components/Spells.json');
  console.log(value)
  const storeData = async (value) => {
    try {  
      console.log(value)
      const jsonValue = JSON.stringify(value)
      console.log(jsonValue)
      await AsyncStorageLib.setItem('key', jsonValue)
  
    } catch (e) { 
      // whatever 'saving error' is 
      console.log('ff')
    }
  }
  const getData = async () => {
    try {
      const jsonValue= await AsyncStorageLib.getItem('key')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e){
      console.log('ff again')
    }
  }


  
  
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
        
        <TouchableOpacity style={styles.button} onPress={storeData()}>
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
