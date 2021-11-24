//import { createState } from "niue"; 
//import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { createState, useState } from '@hookstate/core';


const _spellsObj = createState( [
  {id: uuidv4(), text: 'Choose a spell'},
  {id: uuidv4(), text: 'Choose a spell'},
  {id: uuidv4(), text: 'test'},

  ]
);



//export const PLSWORK = () => useState(_spellsObj)
export default _spellsObj;
//export default test;

//export const useStore = _useStore;
//export const setState = _setState;