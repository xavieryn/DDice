import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { BarChart, Grid } from 'react-native-svg-charts';

export default function CompareModal(props) {
  return (
    <View>
      <BarChart style={{ height: 200 }} data={props.data} contentInset={{ top: 30, bottom: 30 }}>
        <Grid />
      </BarChart>
    </View>
  );
}