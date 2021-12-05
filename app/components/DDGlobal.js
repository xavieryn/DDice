import { v4 as uuidv4 } from 'uuid';
import { createState, useState } from '@hookstate/core';
import AsyncStorageLib from '@react-native-async-storage/async-storage';


/* global object 
const _spellsObj = createState( [
  {id: uuidv4(), text: 'Choose a spell'},
  {id: uuidv4(), text: 'fireball'},
  {id: uuidv4(), text: 'test'},
  ]
);*/
export default value = require('../components/Spells.json');
const storeData = async (value) => {
  try {  
    const jsonValue = JSON.stringify(value)
    console.log(value)
    await AsyncStorageLib.setItem('key', jsonValue)

  } catch (e) { 
    // whatever 'saving error' is 
    console.log('ff')
  }
}

//export default _spellsObj;
