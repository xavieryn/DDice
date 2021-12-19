import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image, SafeAreaView } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import { set } from 'react-native-reanimated';
import { v4 as uuid } from 'uuid';
import { Button } from 'react-native-paper';

export default function Home() {
   const [spells, setSpells] = React.useState([{key:0, text:'Choose a spell'}, {key:1, text: 'firepenisball'}])

   
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            borderBottomEndRadius: 5,
            borderBottomStartRadius: 5,
          }}>
          <Image style={{width: windowWidth, height: 200, resizeMode: 'contain'}} source={require('../assets/dndice.png')} />
        </View>
        <View style={styles.innerContainer}>
        <Image style={{width: windowWidth, height: 400, resizeMode: 'contain'}} source={require('../assets/beholder.png')} />

        </View>
        <View style={styles.buttonIntro}>
          <TouchableOpacity>
            <Text> penis </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
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
  buttonIntro: {
    flex: 0.25,
    alignItems: 'center'
  }
 
});
