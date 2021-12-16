/*
I am using libraries that have licenses that I don't know how to deal with yet.
Here are the links to the github pages for these libraries:

https://github.com/react-native-picker/picker
https://github.com/react-native-async-storage/async-storage
https://github.com/callstack/react-native-paper or https://callstack.github.io/react-native-paper/index.html
https://github.com/Templarian/MaterialDesign-React
*/


import React, { useEffect } from 'react';
import { StyleSheet, View, SafeAreaView } from "react-native";
import BottomNav from './app/components/BottomNav';
import AsyncStorageLib from '@react-native-async-storage/async-storage';


const App = () => {

  useEffect(() => {
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
    const starterSpell = [{ key: 0, text: 'Choose a spell', d4:0,d6:2,d8:0,d10:0,d12:0 }]
    await AsyncStorageLib.setItem('spellTest', JSON.stringify(starterSpell))
  }
  return (

    <SafeAreaView style={styles.container}>
      <BottomNav />
    </SafeAreaView>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App;
