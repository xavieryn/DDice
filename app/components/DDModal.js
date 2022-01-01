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
import DDButton from './DDButton';
import DDdiceSelect from './DDdiceSelect';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function DDModal(props) {
  const numbers = [];

  for (let i = 0; i < 41; i++) {
    numbers.push(i);
  }

  const [selectedDie, setSelectedDie] = React.useState(
    props.diceCount[props.index]
  );

  return (
    <View style={styles.container}>
      {/*top*/}
      <View
        style={{
          backgroundColor: '#231942',
          borderBottomEndRadius: 5,
          borderBottomStartRadius: 5,
        }}>
        <Text style={styles.header}>Select Dice</Text>
      </View>

      {/*middle*/}
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}>
        {/* dice picker */}
        <Picker
          selectedValue={selectedDie}
          onValueChange={(itemValue, itemIndex) => setSelectedDie(itemValue)}>
          {numbers.map((num) => (
            <Picker.Item label={String(num)} value={num} key={num} />
          ))}
        </Picker>
      </View>

      {/*bottom*/}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingBottom: 10,
          borderWidth: 0,
        }}>
        <DDButton
          buttonStyle={styles.button}
          onPress={() => props.setDiceSelector(false)}
          text="Cancel"
          textStyle={{ color: '#4A3D59', fontWeight: '500' }}
        />
        <DDButton
          buttonStyle={styles.button}
          onPress={() => {
            props.setDiceSelector(false);
            props.diceCount[props.index] = selectedDie ? selectedDie : '';
          }}
          text="Done"
          textStyle={{ color: '#4A3D59', fontWeight: '500' }}
        />
      </View>
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
