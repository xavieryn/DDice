//import { createState } from "niue"; 
//import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { createState, useState } from '@hookstate/core';

// global object 
const _spellsObj = createState( [
  {id: uuidv4(), text: 'Choose a spell'}
  ]
);

export default _spellsObj;
