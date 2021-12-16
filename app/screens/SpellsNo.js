import React, { useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView,  Dimensions, SafeAreaView} from 'react-native'; 
import SpellsModal from '../components/SpellsModal';
import SpellTitle from '../components/SpellTitle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorageLib from '@react-native-async-storage/async-storage';


const windowHeight = Dimensions.get('window').height;

const SpellsNo = () =>{
  // title of screen
  const [title, setTitle] = React.useState('Spells');
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
  const onCheck = () => {
    console.log(spellMap);
  }
  return ( 
    <SafeAreaView style={styles.container}> 
     <View
        style={{
          backgroundColor: '#231942',
          borderBottomEndRadius: 5,
          borderBottomStartRadius: 5,
          marginBottom: 15,
        }}>
      {/* displays title */}
        <Text style={styles.header}>{title}</Text>
      </View>
       {/* button that refers to function called CodingSucks */}
     
      <View style={styles.innerContainer}>   
        <Text>Want to create spells?</Text>
        <TouchableOpacity><Text>Click Here!</Text></TouchableOpacity>
      </View>
      
    </SafeAreaView> 

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
  createSpell: {
    flex: 0.1,
    textAlign: 'center',
    alignItems: 'center',
    
  }
 });


export default SpellsNo;