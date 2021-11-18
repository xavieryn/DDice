import { createState } from "niue"; 
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const [_useStore, _setState] = createState({
  items: [
      {id: 0, text: 'Choose a spell'},
  ]
});


export const useStore = _useStore;
export const setState = _setState;