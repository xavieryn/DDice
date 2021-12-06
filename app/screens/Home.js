import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import { set } from 'react-native-reanimated';
import { v4 as uuid } from 'uuid';

export default function Home() {
   const [spells, setSpells] = React.useState([{key:0, text:'Choose a spell'}, {key:1, text: 'firepenisball'}])

   const findSpells = async () => {
    const result = await AsyncStorageLib.getItem('spellTest');
    let spells = [];
    if (result !== null) spells = JSON.parse(result);
    setSpells(spells);
    console.log(spells)
   }
   const pp = async () => {
     const spell = {key: uuid(), text:'pls test'};
     const updatedSpells = [...spells, spell];
     await AsyncStorageLib.setItem('spellTest', JSON.stringify(updatedSpells))
   }
  return (
    
    <View style={styles.container}>
      <View
        style={{
          borderBottomEndRadius: 5,
          borderBottomStartRadius: 5,
        }}>
        <Image style={{width: windowWidth, height: 200, resizeMode: 'contain'}} source={require('../assets/dndice.png')} />
      </View>
      <View style={styles.innerContainer}>
        
        <TouchableOpacity style={styles.button} onPress={findSpells}>
          <Text>
            penissss
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={pp}>
          <Text>
            print new spell
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
