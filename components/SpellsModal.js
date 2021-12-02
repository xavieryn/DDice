import React from "react";
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, Pressable, View, Image } from "react-native";
import { useState, none } from '@hookstate/core';
import _spellsObj from '../components/DDGlobal';
import { TextInput } from "react-native-gesture-handler";

const App = ( { item } ) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  
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
              {item.text.get()}
            </Text>
            {/* deletes item */}
            <TouchableOpacity 
            onPress={() => {
              item.set(none)}}
            style={[styles.button, styles.buttonClose]}>
              <Text>
                Delete
              </Text>
            </TouchableOpacity>
            {/* edits item | no function */}
            <TouchableOpacity style={[styles.button, styles.buttonClose]}>
              <Text> Edit </Text>
            </TouchableOpacity>
            {/* closes item */}
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
             
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
  textStyle: {
    color: "#4a3d59",
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