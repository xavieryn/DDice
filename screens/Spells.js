import React from 'react';
import { Text, View, StyleSheet, ScrollView,  Dimensions} from 'react-native'; 
import Modal from '../components/SpellsModal';
//import { useStore, setStore } from "../components/DDGlobal";
import { useState } from '@hookstate/core';
import _spellsObj  from '../components/DDGlobal';
import { TouchableOpacity } from 'react-native-gesture-handler';

const windowHeight = Dimensions.get('window').height;

const Spells = () =>{
  // title of screen
  const [title, setTitle] = React.useState('Spells');
  //  able to change state of screen
  const state = useState(_spellsObj);
  
  // function adds new object 
  // for testing purposes
  {/*
  function CodingSucks() {
      state.merge([{id: uuivd4(), text:'pp'}])
  }
*/}
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
      <TouchableOpacity onPress={ () => CodingSucks()}>
        <Text>
          hiiii
        </Text>
      </TouchableOpacity>
      <ScrollView style={styles.innerContainer}>
         {/* displays each item in each container*/}
        {state.map(item => (
          <View style={styles.spellContainer} key={item.id.get()}>
          <Text style={styles.spellText}>
            {item.text.get()} 
          </Text>
           {/* pop up that gives users options to: Delete, Edit, Rename */}
          <Modal/>   
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
 });


export default Spells;