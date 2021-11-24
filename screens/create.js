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
import _spellsObj, {none} from '../components/DDGlobal';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// export function
export default function create() {
  const [title, setTitle] = React.useState('Create Spell');
  const [diceSelecter, setDiceSelecter] = React.useState(false);
  const [diceCount, setDiceCount] = React.useState(['', '', '', '', '']);
  const [index, setIndex] = React.useState(0);
  const [spellName, setSpellName] = React.useState('');
  const state = useState(_spellsObj);

  return (
    <View style={styles.container}>
      <Modal visible={diceSelecter} animationType="slide">
        <DDModal
          setDiceSelecter={setDiceSelecter}
          diceCount={diceCount}
          setDiceCount={setDiceCount}
          index={index}
        />
      </Modal>
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
          flexDirection: 'row',
          paddingHorizontal: 9,
          alignItems: 'center',
        }}>
        {/* dice selection menue */}
        <View
          style={{
            flex: 1.2,
            flexDirection: 'column',
            justifyContent: 'center',
            height: windowHeight / 1.5,
            borderWidth: 0,
          }}>
          <DDdiceSelect
            text={diceCount[0] + 'D4'}
            press={() => {
              setDiceSelecter(!diceSelecter);
              setIndex(0);
            }}
          />
          <DDdiceSelect
            text={diceCount[1] + 'D6'}
            press={() => {
              setDiceSelecter(!diceSelecter);
              setIndex(1);
            }}
          />
          <DDdiceSelect
            text={diceCount[2] + 'D8'}
            press={() => {
              setDiceSelecter(!diceSelecter);
              setIndex(2);
            }}
          />
          <DDdiceSelect
            text={diceCount[3] + 'D10'}
            press={() => {
              setDiceSelecter(!diceSelecter);
              setIndex(3);
            }}
          />
          <DDdiceSelect
            text={diceCount[4] + 'D12'}
            press={() => {
              setDiceSelecter(!diceSelecter);
              setIndex(4);
            }}
          />
        </View>

        {/* spell name and creation */}
        <View
          style={{
            flex: 1.8,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            borderWidth: 0,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: 5,
            }}>
            {/* name input */}
            <TextInput
              style={styles.input}
              placeholder="Spell name"
              onChangeText={(text) => setSpellName(text)}
            />

            {/* create spell button */}
            <DDButton
              
              buttonStyle={{
                backgroundColor: '#E4D8C6',
                height: 35,
                width: windowWidth / 2,
                alignItems: 'center',
                borderRadius: 2,
                justifyContent: 'center',
              }}
              onPress={() => {
                state.merge([{
                  text: spellName,
                  d4: diceCount[index],
                  d6: diceCount[index],
                  d8: diceCount[index],
                  d10: diceCount[index],
                  d12: diceCount[index],
                  id: Math.random()
                }])
              }}
              text="Create Spell"
              textStyle={{
                color: '#4A3D59',
                fontWeight: 'bold',
                fontSize: 15,
              }}
            />
          </View>
        </View>
      </View>

      {/*bottom*/}
    </View>
  );
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
