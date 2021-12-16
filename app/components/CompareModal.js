import * as React from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Modal,
  SafeAreaView
} from 'react-native';

export default function CompareModal(props) {

  for (let i = 0; i < (props.data1.length - props.data2.length); i++) {
    props.data2.push(0);
  }
  for (let i = 0; i < (props.data2.length - props.data1.length); i++) {
    props.data1.push(0);
  }

  const lines = {
    labels: [0,props.data1.length],
    datasets: [
      {
        data: props.data2.map((value) => value*100)
      },
      {
        data: props.data1.map((value) => value*100)
      }
    ]
  }

  return (
    <SafeAreaView>
      <LineChart
        data={lines}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix="%"
        yAxisInterval={1} // optional, defaults to 1
        withDots={false}
        fromZero={true}
        withOuterLines={true}
        withInnerLines={false}
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 100) => `rgba(0, 0, 0)`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0)`,
          style: {
            borderRadius: 16
          },
          propsForBackgroundLines: {
            strokeOpacity: 1
          }
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </SafeAreaView>

  );
}