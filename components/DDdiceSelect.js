import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

import { Card } from 'react-native-paper';
import DDButton from './DDButton';
import DDModal from './DDButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function DDdiceSelect(props) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <Card style={styles.box}>
        <Text style={styles.paragraph}>{props.text}</Text>
      </Card>
      <DDButton
        buttonStyle={styles.button}
        onPress={props.press}
        text="+"
        textStyle={{
          color: '#ACACD9',
          fontWeight: "500",
          fontSize: windowWidth / 20,
          marginBottom: 4,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 0,
    justifyContent: 'space-between',
  },
  paragraph: {
    margin: 0,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#4A3D59'
  },
  header: {
    margin: 24,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4A3D59',
    height: windowWidth / 10,
    width: windowWidth / 10,
    alignItems: 'center',
    borderRadius: 2,
    justifyContent: 'space-evenly',
    marginBottom: 0,
  },
  box: {
    height: windowWidth / 5,
    width: windowWidth / 5,
    alignItems: 'center',
    paddingVertical: windowWidth / 5 / 3,
    backgroundColor: '#E4D8C6'
  },
});
