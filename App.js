/*
I am using libraries that have licenses that I don't know how to deal with yet.
Here are the links to the github pages for these libraries:

https://github.com/react-native-picker/picker
https://github.com/react-native-async-storage/async-storage
https://github.com/callstack/react-native-paper or https://callstack.github.io/react-native-paper/index.html
https://github.com/Templarian/MaterialDesign-React
*/


import * as React from 'react';
import { StyleSheet, View } from "react-native";
import BottomNav from './components/BottomNav';
import { createState } from "niue"; 

const [_useStore, _setState] = createState({
  items: [
      {id: 1, text: 'p'},
      {id: 2, text: 'e'},
      {id: 3, text: 'n'},
      {id: 4, text: 'i'},
      {id: 5, text: 's'},
      {id: 6, text: 'e'},
      {id: 7, text: 's'},
  ]
});


export const useStore = _useStore;
export const setState = _setState;

const App = () => {
  
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
