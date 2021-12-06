import React, { useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView,  Dimensions, TextInput} from 'react-native'; 
import SpellsModal from '../components/SpellsModal';
import SpellTitle from '../components/SpellTitle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorageLib from '@react-native-async-storage/async-storage';


const windowHeight = Dimensions.get('window').height;

const Spells = () =>{
  const random = [{key: 10, text: "not actual object"}];
  // title of screen
  const [title, setTitle] = React.useState('Spells');
  const [spellMap, setSpellMap] = React.useState([])
  
  // not really useful
  const onAddSpell = async () => {
    const spell = {key: 3, text: "hellooooo"}
    await AsyncStorageLib.setItem('spellTest', JSON.stringify(spell));
  }
  useEffect ( () => {
    onCheckSpell();
  })

  const onCheckSpell= async () => {
    const result = await AsyncStorageLib.getItem('spellTest');
    if (result !== null) setSpellMap(JSON.parse(result));
    //console.log(spellMap)
  }
  return ( 
    <View style={styles.container}> 
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
      <View>
        <TouchableOpacity onPress={onAddSpell}>
          <Text> add spell </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={onCheckSpell}>
          <Text> check spell </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.innerContainer}>
         {/* displays each item in each container
        {state.slice(1).map(item => ( */}
        
        {spellMap.slice(1).map(item => (
          
          <View style={styles.spellContainer} key={item.key} >
          
          <SpellTitle item={ item }/>

           {/* pop up that gives users options to: Delete, Edit, Rename */}
          <SpellsModal item={ item }/>   
        </View>
        ))}
        
      </ScrollView>
    </View> 

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
  },
  text: {
    color: 'white',
  }
 });


export default Spells;