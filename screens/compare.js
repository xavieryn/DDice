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
import { useStore, setStore } from '../components/DDGlobal'


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// export function
export default function compare() {
  const { items: items } = useStore(["items"]);
  const [title, setTitle] = React.useState('Create Spell');

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
          {items.map((spell) => (
            <Picker.Item label={spell.text} value={spell.id} />
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
            console.log(simulate(spells[selectedSpell]))
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
function simulate(spell) {
  const numRolls = spell.d4 + spell.d6 + spell.d8 + spell.d10 + spell.d12;
  const max = (spell.d4 * 4) + (spell.d6 * 6) + (spell.d8 * 8) + (spell.d10 * 10) + (spell.d12 * 12);
  const p = 1/numRolls;

  let rolls = {};
  let roll = 0;

  const trials = (10/p > 10/(1-p) ? 10/p : 10/(1-p));

  console.log(numRolls);
  console.log(spell);

  for (let i = numRolls; i <= max; i++) {
    rolls[i] = 0;
  }

  for (let i = 0; i < trials; i++) {
    roll += simulateRolls(spell.d4, 4);
    roll += simulateRolls(spell.d6, 6);
    roll += simulateRolls(spell.d8, 8);
    roll += simulateRolls(spell.d10, 10);
    roll += simulateRolls(spell.d12, 12);

    rolls[roll]++;
  }
  
  return(rolls);
}

function simulateRolls(dice, sides) {
  let returnVal = 0;

  for (let i = 0; i < dice; i++) {
    returnVal += Math.floor(Math.random() * parseInt(sides + 1));
  }

  return(returnVal);
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
