import * as React from 'react';
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

// You can import from local files
import DDButton from '../components/DDButton';
import DDdiceSelect from '../components/DDdiceSelect';
import DDModal from '../components/DDModal';
import { useState } from '@hookstate/core';
import _spellsObj  from '../components/DDGlobal';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// export function
export default function compare() {
  
  const [title, setTitle] = React.useState('Create Spell');
  const state = useState(_spellsObj);
  const [selectedSpell, setSelectedSpell] = React.useState();

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
          {state.map((spell) => (
            <Picker.Item label={spell.text.get()} value={spell.id.get()}  key={spell.id.get()} />
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
            console.log('Visualize')
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

// np > 10
// n(1-p) > 10


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
