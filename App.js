/*
I am using libraries that have licenses that I don't know how to deal with yet.
Here are the links to the github pages for these libraries:

https://github.com/react-native-picker/picker
https://github.com/react-native-async-storage/async-storage
https://github.com/callstack/react-native-paper or https://callstack.github.io/react-native-paper/index.html
https://github.com/Templarian/MaterialDesign-React
*/


import React, { useEffect } from 'react';
import { StyleSheet, View } from "react-native";
import BottomNav from './app/components/BottomNav';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import { checkForUpdateAsync } from 'expo-updates';

const App = () => {

  useEffect ( () => {
    check();
  })
  const check = async () => {
    const result = await AsyncStorageLib.getItem('spellTest')
    let check = [];
    if (result !== null) check = JSON.parse(result);
    const updatedCheck = check.filter(c => c.key !== 0);
    if (updatedCheck.length < 1) pp();

  }

  const pp = async () => {
    const starterSpell = [{key:0, text:'Choose a spell'}]
    await AsyncStorageLib.setItem('spellTest', JSON.stringify(starterSpell))
  }
  return (
    <View style={styles.container}>
      <BottomNav/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App;
