import { createState } from "niue"; 
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

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