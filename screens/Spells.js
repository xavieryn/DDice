import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Dimensions,  Pressable, FlatList} from 'react-native'; 
import Constants from 'expo-constants';
import Modal from '../components/Modal';


const windowWidth = Dimensions.get('window').width;const windowHeight = Dimensions.get('window').height;


const Spells = () => {
  
  //const { penis } = useStore(["items"]);

  const [items, setItems] = useState([
      {id: 1, text: 'p'},
      {id: 2, text: 'e'},
      {id: 3, text: 'n'},
      {id: 4, text: 'i'},
      {id: 5, text: 's'},
  ]);

  return (
    <View style={styles.container}> 
      <Text style={styles.title}>
        Spells
      </Text>

      <ScrollView style={styles.innerContainer}>
        {items.map(item => (
          <View style={styles.spellContainer}>
          <Text style={styles.spellText}>
            {item.text} 
          </Text>
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
    borderWidth: 1,
    padding: 20,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },

  spellText: {
    flex: 3, 
    borderWidth: 1, 
    textAlign: 'center',
  },
  container: {
    padddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#8F7EA6',
  },

  title: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    color: 'white',
    backgroundColor: '#413768',
    height: windowHeight/5,
    paddingTop: 20,
    paddingBottom: 20,

    
  },

  innerContainer: {
    borderWidth: 1,
    flex: 1,
    
  },
 });


export default Spells;