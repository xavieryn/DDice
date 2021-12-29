import React from 'react';
import { Text, View, StyleSheet, ScrollView,  Dimensions, TextInput} from 'react-native'; 
import AsyncStorageLib from '@react-native-async-storage/async-storage';
const windowHeight = Dimensions.get('window').height;

const SpellTitle = ( { item } ) =>{
  //title = spell text | adds state
  const [newText, onChangeText] = React.useState(item.text);
  // changes text when user inputs
  const changeName = async () => {
    const result = await AsyncStorageLib.getItem('spellTest');
    let spells = [];
    if (result !== null) spells = JSON.parse(result);
    // this part changes whole object to string rather than just changing the item    
    //const updatedSpells = spells.find(spells => spells.key == item.key).text = newText;
    for (let v of spells) if (v.key == item.key) v.text = newText;

    //console.log(updatedSpells)
    await AsyncStorageLib.setItem('spellTest', JSON.stringify(spells));
  }
  return ( 
    <TextInput
      style={styles.spellText}
      value={newText}
      onChangeText={onChangeText}
      onSubmitEditing={ changeName}            
    />
        
  );
}

const styles = StyleSheet.create ({
   spellContainer: {
    flex: 1,
    //borderWidth: 1,
    padding: 20,
    marginLeft: 17,
    marginRight: 17,
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#E4D8C6',
    borderRadius: 10,
    
  },

  spellText: {
    flex: 3, 
    //borderWidth: 1, 
    textAlign: 'center',
    fontSize: 20,
    color: '#4A3D59',
    fontWeight: 'bold',
    //fontFamily: 'Avenir Next LT Pro Demi'
  },
  container: {
    flex: 1,
    backgroundColor: '#9988A4',
    paddingBottom: windowHeight / 20,
    justifyContent: 'space-between',
  }, 
  header: {
    margin: 24,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E6DEFC',
  },

  innerContainer: {
    borderWidth: 1,
    flex: 1,
  },
 });


export default SpellTitle;
    
     
