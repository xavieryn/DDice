import React from 'react';
import { Text, View, StyleSheet, ScrollView,  Dimensions} from 'react-native'; 
import Modal from '../components/SpellsModal';
import { useStore, setStore } from "../components/DDGlobal";

const windowHeight = Dimensions.get('window').height;

const Spells = () => {
  const [title, setTitle] = React.useState('Spells');
  const { items: items } = useStore(["items"]);

  return (
    <View style={styles.container}> 
     <View
        style={{
          backgroundColor: '#231942',
          borderBottomEndRadius: 5,
          borderBottomStartRadius: 5,
          marginBottom: 15,
        }}>
        <Text style={styles.header}>{title}</Text>
      </View>

      <ScrollView style={styles.innerContainer}>
        {items.map(item => (
          <View style={styles.spellContainer} key={item.id}>
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
    borderRadius: 10,
  },

  spellText: {
    flex: 3, 
    borderWidth: 1, 
    textAlign: 'center',
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