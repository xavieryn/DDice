import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default function DDButton(props) {
  return (
    <View>
      <TouchableOpacity
        style={props.buttonStyle}
        onPress={props.onPress}
      >
        <Text style={props.textStyle}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}