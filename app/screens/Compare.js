import React, { useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Modal,
} from 'react-native';
import Constants from 'expo-constants';
import { Picker } from '@react-native-picker/picker';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

// You can import from local files
import DDButton from '../components/DDButton';
import DDdiceSelect from '../components/DDdiceSelect';
import DDModal from '../components/DDModal';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// export function
export default function compare() {
  // title of screen
  const [title, setTitle] = React.useState('Create Spell');
  const [selectedSpell, setSelectedSpell] = React.useState();
  // grabs async storage spells and sets to spellMap
  const [spellMap, setSpellMap] = React.useState([])
  // the first time the screen renders, onCheckSpell function runs, 
  // and whenever there is a change it rerenders onCheckSpell
  useEffect ( () => {
    onCheckSpell();
  })
  // get async storage and parses it to spellMap state
  const onCheckSpell= async () => {
    const result = await AsyncStorageLib.getItem('spellTest');
    if (result !== null) setSpellMap(JSON.parse(result));
  }

  return (
    <View style={styles.container}>
      {/*top*/}
      <View
        style={{
          backgroundColor: '#231942',
          borderBottomEndRadius: 5,
          borderBottomStartRadius: 5,
        }}>
        <Text style={styles.header}>{title}</Text>
      </View>

      {/*middle*/}
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}>
        <Picker
          selectedValue={selectedSpell}
          onValueChange={(itemValue, itemIndex) => setSelectedSpell(itemValue)}>
          {spellMap.map((spell) => (
            <Picker.Item label={spell.text} value={spell.id}  key={spell.id} />
          ))}
        </Picker>
      </View>

      {/*bottom*/}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <DDButton
          buttonStyle={{
            backgroundColor: '#E4D8C6',
            height: 50,
            width: windowWidth / 1.5,
            alignItems: 'center',
            borderRadius: 2,
            justifyContent: 'center',
          }}
          onPress={() => {
            console.log(roll(selectedSpell))
          }}
          text="Visualize"
          textStyle={{
            color: '#4A3D59',
            fontWeight: 'bold',
            fontSize: 25,
          }}
        />
      </View>
    </View>
  );
}

// calculate spell chart
function roll(spell) {
  let dice = [];
  
  // add d4
  for (let i = 0; i < spell.d4; i++) {
    appendItem(dice, [1/4,1/4,1/4,1/4]);
  }
  
  // add d6
  for (let i = 0; i < spell.d6; i++) {
    appendItem(dice, [1/6,1/6,1/6,1/6,1/6,1/6]);
  }
  
  // add d8
  for (let i = 0; i < spell.d8; i++) {
    appendItem(dice, [1/8,1/8,1/8,1/8,1/8,1/8,1/8,1/8]);
  }
  
  // add d10
  for (let i = 0; i < spell.d10; i++) {
    appendItem(dice, [1/10,1/10,1/10,1/10,1/10,1/10,1/10,1/10,1/10,1/10]);
  }
  
  // add d12
  for (var i = 0; i < spell.d12; i++) {
    appendItem(dice, [1/12,1/12,1/12,1/12,1/12,1/12,1/12,1/12,1/12,1/12,1/12,1/12]);
  }
  
  let answer = findConvolution(dice[0], dice[1]);
  
  for (let k = 2; k < dice.length; k++)   {
    answer = findConvolution(answer, dice[k]);
  } 
  
  return (answer);
}

function findConvolution(a, b) {
  let output = [];
  
  for (let i = 0; i < (a.length + b.length - 1); i++) {
    appendItem(output, []);
  }
  
  for(let i = 0; i < a.length; i++)   {
    for(let j = 0; j < b.length; j++)   {
      output[i + j] += (a[i] * b[j]);
    } //end for j
  } // end for i
  
  return (output);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9988A4',
    paddingBottom: windowHeight / 20,
    justifyContent: 'space-between',
  },
  paragraph: {
    margin: 0,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    margin: 24,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E6DEFC',
  },
  button: {
    backgroundColor: '#E4D8C6',
    height: 35,
    width: windowWidth / 4,
    alignItems: 'center',
    borderRadius: 2,
    justifyContent: 'center',
  },
  box: {
    height: windowWidth / 5,
    width: windowWidth / 5,
    alignItems: 'center',
    paddingVertical: windowWidth / 5 / 3,
  },
  input: {
    height: 35,
    width: windowWidth / 2.5,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#4A3D59',
    color: '#4A3D59',
  },
});
