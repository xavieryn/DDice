//import { createState } from "niue"; 
//import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { createState, useState } from '@hookstate/core';

// const [_useStore, _setState] = createState({
//   items: [
//       {id: 0, text: 'Choose a spell'},
//   ]
// });

const _spellsObj = createState({ 
  items: [
        {id: 0, text: 'Choose a spell'},
  ]
});

export const PLSWORK = () => useState(_spellsObj);

//export const useStore = _useStore;
//export const setState = _setState;