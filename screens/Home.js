import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files



// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        D&Dice
      </Text>
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
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#8f7ea6',
    padding: 8,
    borderWidth: 1,
    color: 'white',
  },
  button: {
    padding: 20,
    backgroundColor: '#413768',
    borderRadius: 10,
  },
  title: {
    marginBottom: 10,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    color: 'white',
    backgroundColor: '#413768',
    marginLeft: 50,
    marginRight:50,
  
  },
  innerContainer: {
    flex: 1,   
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    padding: 10,
  },
 
});
