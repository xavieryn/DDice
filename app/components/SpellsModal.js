import React from "react";
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, Pressable, View, Image, Icon} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { Ionicons } from '@expo/vector-icons'
const App = ( { item } ) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const deleteSpell = async () => {
    console.log('deleteSpell')
    const result = await AsyncStorageLib.getItem('spellTest');
    let spells = [];
    if (result !== null) spells = JSON.parse(result);
    
    // for some reason my code deletes all Create.js spells 
    // when I am only trying to delete one
    const updatedSpells = spells.filter(s => s.key !== item.key);
    await AsyncStorageLib.setItem('spellTest', JSON.stringify(updatedSpells));
  }
  return (
    <View style={styles.centeredView}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* spell text */}
            <Text style={styles.text}>
              {item.text}
            </Text>
            {/* deletes item */}
            <TouchableOpacity 
            onPress={deleteSpell}
            style={[styles.button, styles.buttonClose]}>
              <Text>
                Delete
              </Text>
            </TouchableOpacity>
            {/* closes item
            FIX THIS */}
            
            <Ionicons 
              name='close'
              style={styles.buttonClose2}
              size={25}
              color='#E4D8C6'
              onPress={() => setModalVisible(!modalVisible)}

            />
            
             
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Image
          source={require('../assets/dots.png')}
          style={styles.image}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#413768",
    borderRadius: 20,
    padding: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 0,
    
  },
  buttonOpen: {
    //change color to white if you want to see how big dimensions are 
    backgroundColor: '#E4D8C6',
  },
  buttonClose: {
    backgroundColor:  '#e4d8c6',
  },
  buttonClose2: {
   position: 'absolute',
   top: 3,
   right: 5,

    //position: 'absolute',
  },
  textStyle: {
    color: "white",
    fontWeight: "500",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: '#e6defc',
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 30,
    
  },
  image: {
    width: 50,
    height: 10,    
    
  },
  text: {
    color: 'white',
  }
});

export default App;