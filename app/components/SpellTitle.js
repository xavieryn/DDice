import React from 'react';
import { Text, View, StyleSheet, ScrollView,  Dimensions, TextInput} from 'react-native'; 
import SpellsModal from './SpellsModal';
import { TouchableOpacity } from 'react-native-gesture-handler';

const windowHeight = Dimensions.get('window').height;

const SpellTitle = ( { item } ) =>{
  //title = spell text | adds state
  const [newText, onChangeText] = React.useState(item.text);
  // changes text when user inputs
  return ( 
    <TextInput
       style={styles.spellText}
        value={newText}
        onChangeText={onChangeText}
       onSubmitEditing={ () => item.text.set(() => newText)}            
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
    
     
